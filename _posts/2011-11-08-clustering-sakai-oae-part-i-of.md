---
layout: post
title: 'Clustering Sakai OAE: Part I of ?'
description: ""
date: Tue Nov 08 2011 02:22:53 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/11/08/clustering-sakai-oae-part-i-of-n/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Over the past month, on and off, I have been working with the developers at Charles Sturt University (CSU) to get Sakai OAE to cluster. The reasons they need it are obvious. Without clustering, a single instance of Sakai OAE will not scale upto the number of users they needed to support and with a single instance and SLA on uptime would be pointless. So we have to cluster. Sakai has generally been deployed in a cluster at any institution where more than a handfull of students were using the system. Clustering Sakai CLE is relatively straightforward compared to OAE. It can be done by configuring a load balancer with sticky sessions and deploying multiple app servers connecting to a single Database. However when an app server node dies with Sakai CLE, users are logged off and lose state. There are some commercial extensions to Sakai CLE using session replication with Terracotta that may address this.

### State Management

In Sakai OAE, right at the start of the project, we wanted to move all state into the client, and make the server completely RESTfull. No state on the server at all. We also didn't want to have any session footprint on the server. We wanted server capacity to be a function of request traffic and not a function of number of logged in users. With no session state, we wanted to ensure that when a app server node was lost, users authentication and authorization state was recreated on whichever new app server node they were allocated. In Sakai OAE, although we are deploying with sticky sessions, we are only doing that to reduce the need for all data to appear instantly everywhere in the cluster. So the custom component that manages the authentication state and authorization state of a user has dependencies on the deployment in the cluster.

### Location

The second thing we wanted to ensure when designing this area of the code base almost 2 years ago, was that we could efficiently track the location of the user within the content system. This may sound a bit odd, but it relates to the context of what they see on screen. If two users are looking at the same information at the same time, then UI components may want to encourage them to collaborate. This service also needs to be cluster aware since managing the transient location of users in persistent store would result in unsustainable update traffic. So the cluster tracking service/bundle was designed to track the location of users in memory, and segment that memory out to the app servers in the cluster, so that as we add more app servers we aggregate the memory usage for this service rather than replicate.

### Events and Messaging

The final area that needs attention in a clustered environment is messaging. OSGi Events for internal messaging and bridge to JMS provided by ActiveMQ for remote transport. The configuration of messaging, which I still need to look at, is believed to be simpler than the above 2 services since it only requires configuring ActiveMQ in multi master mode. I say simpler, based on the GSoC 2010 work on streaming activity events into a Apache Cassandra based warehouse where we added conected with an ActiveMQ broker in multimaster mode. However, I seem to remember saying simple about the last months work, so I'll have to wait and see on that one.

### Jackrabbit

For those familiar with Sakai OAE you will know we are based on Apache Sling which itself is based on Apache Felix and Apache Jackrabbit. We use Apache Jackrabbit to store our "enterprise" content, namely the application content and institutional media. Since this is slow changing, read only, we treat each app server node as a standalone instance of Jackrabbit working of separate JCR images on local storage. This avoids the need to cluster Jackrabbit for either HA or scaling, not that it would need either of those used in this mode. We store our user generated content in a separate repository (Sparse) that is far less sophisticated than Jackrabbit, but covers that use case to satisfy our needs.

### CSU Structure

At CSU the layers of the application are isolated from one another using a hardware load balancer (HLB), between each layer. IP requests are received on the front end host, distributed to a stateless webtier which does the normal forward proxy operation through another context on the HLB to the app server nodes. The tiers and LB's are configured to maintain the original request context (Host+port), so the app server is configured to use that context to separate user content from application content. This is not the way many have configured OAE but it eliminates the need to distinguish requests based on the physical port on which they arrive.

To start with we deployed the OAE 1.0 release which came out about 2 months ago. This had not been run on a cluster before release so it was uncharted territory. Having configured the WebTiers and LB contexts and the app servers all worked perfectly, however none of the services mentioned above worked properly. When an app server died, the LB would switch and cause the user to loose all state. In general they became an anonymous user once more and would have to login again. Communication in the cluster for both state management and location is managed through EhCache. As with Sakai CLE there are local EhCache caches, and key based invalidation caches. Unlike Sakai CLE we also use replication within the cluster. Since it would overload the internal network of a cluster if we replicated every users state, we dont do that. Each server maintains a list of a set of private keys which it rotates on a 5 minute cycle. Once a key has been rotated 5 times, it become invalid. We use these keys to decrypt client cookies and identify the user. If the client cookie can't be decrypted the authentication and authorization state expires. Obviously we re-issue the cookies when a new active key becomes available. The HMAC algorithm is SHA-512 and the first keys themselves are based on a UUID, which should make it reasonable hard to work out what the secret is before it becomes useless. For each app server in the cluster we need to replicate about 5x20 bytes of data once every 5 minutes, regardless of how many users there are in the system, but if that data is not replicated, sessions can't migrate between app servers.

The location service has a slightly higher demand on internal network bandwidth, however, without having done any load testing I cant quantify that at present. This post is Part I of ?

## OAE 1.0 Patches

The first problem, which why the patch to OAE 1.0 is do big, is that to replicate, the cache key and payload must be serializable (which they were) but the destination of the replication the cache payload (ie the classloader deep within EhCache) must also be able to convert the byte stream into a object instance. In OAE 1.0 there were 2 problems.

- All the critical classes were private in their OSGi bundles, so the EhCache classloader could not load them.
- Some of those classes held references to services, so when they were loaded the reference was missing and the code failed with NPE's

Getting classloaders, especially those that never knew something like OSGi would exist, to recognise private classes is not always straightforward. We are using EhCache 1.5, which uses context classloaders in places. For the moment, the classes are exported as part of the public API and the patch has re-factored parts of the code base to ensure that references to services are not cached. We could have written a custom classloader to locate the bundle containing the private classes so the cache could load them, however it felt wrong to bypass the OSGi R4 classloader policy so exporting the cached classes looked like the best way. The downside of this approach is that any bundle in the JVM can now get hold of a replicated cache, and load the once private class, but then, were not running a security manager so that could be done anyway.

With the classloading issues fixed, the setup of EhCache itself is straight forward and as per the documentation now maintained by Terracotta. We use RMI based peer discovery and replication. The peer discovery uses multicast over a private group and a separate group port to ensure that we don't accidentally join another cluster on the same subnet. Replication and invalidation is performed on a cache by cache configuration over RMI if required, and we have configured each cache by name to match its expected characteristics.

The patch to Sakai OAE 1.0 has been shared at <https://jira.sakaiproject.org/browse/KERN-2267> and <http://codereview.appspot.com/5350045>

Users now remain logged in when app server nodes die. Once we have the HLB configured correctly they wont notice, which opens the ability to elastically scale and perform rolling updates.

We have also configured the Solr component to run in a cluster, but I will save that for another post as its not complete and there are still many problems to be addressed.
