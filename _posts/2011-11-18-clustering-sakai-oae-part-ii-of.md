---
layout: post
title: 'Clustering Sakai OAE: Part II of ?'
description: ""
date: Fri Nov 18 2011 04:17:29 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/11/18/clustering-sakai-oae-part-ii-of-n/
categories: "Uncategorized"
hero: ./img/2011-11-csucluster.png
---
## Part II : Solr Clustering

This Post carries on from my previous post about clustering Sakai OAE at Charles Sturt University here in Australia. The work done recently has focused on two issues. Firstly a cluster of app server nodes to run against a cluster of Solr nodes, and secondly ensuring that the UI doesnt flinch of the Solr nodes disappear. There is one caveat there, the UI can flinch if there are no Solr servers alive, but the user should not notice if we bring solr servers down, even if its the master Solr server.

## Solr in clusters and in Clouds

Anyone wanting to know in detail how standard Solr clusters or clouds work should go and read the Solr Cloud documentation. Solr clusters on a number of levels, but for the scale of indexes that OAE is going to need to support initially we are unlikely to need much more than basic clustering. By basic clustering I mean using a cluster of Solr servers that each have a copy of the index, and are able to service queries. The next level of clustering up would be to start sharding the Solr index so that we have sub clusters of Solr servers operating on shards or the entire index. The configuration of both of these is described in the Solr Cloud documentation using ZooKeeper to manage the cluster. At CSU we are using VM's managed by PuppetD, simple because that integrates with the current architecture. One think I should mention at this stage, as the managers head for the hills with their hands in the air at all this complexity.... these are standard Solr servers, out of the box, running in Tomcat with only mild configuration. Easy to do in 15 minutes. We are not talking about deploying OAE proprietary code here.

## Query operations

To make the a cluster of Solr servers take the load of many app server nodes there needs to be load balancing and automatic failover at the app server nodes. CSU uses hardware load balancers from a well known manufacturer that are perfectly capable to performing application layer load balancing, however not all deployment sites have that capability, so we are using the LBHttpSolrServer, configured with a large list of potential Solr servers. The ones that are not up and running are not used which gives us the ability to add more, at will, to take increased app server load. We can, to a degree, scale elastically. We could make this dynamic through ZooKepper or some other lookup mechanism. There are a number of available LB algorithms with this SolrJ client and in tests we have done adding and removing Solr servers from the cluster goes completely noticed at the UI.

That was the easy part, now the hard part. OAE uses Solr in a close to real time mode. We are not working on indexing a large corpus of slow changing or immutable objects. We are indexing user generated content and we think that our users expect their content to appear in search results immediately. Anyone who knows how non trivial inverted indexes operate will know that, upto a point, that is possible on a single JVM, but replicating that behaviour over a cluster is unrealistic. A highly distributed transactional model, where on commit, everything everywhere is in the same state (+- 1-2ms), becomes hard to deliver as well as providing responsiveness and scalability. Certainly near zero latency between a users actions and that update appearing in all indexes is resource intensive and hard to achieve. So we have adopted a Just in time model. When a user updates something, the data reaches the location where the user is going to look for it, just before they look for it, ie just-in-time. The question that now exists is how much time do we have? I like to call it Quality of Update Service. UI folks want no more than a few ms, so the next Ajax request finds the data, and that puts a pressure on the application. A simple application, operating on a single JVM can use the Solr index to publish all data everywhere in the index instantly. Solr4 helps us here since it can do soft commits delivering near real time indexing. However to get any sort of scalability and reliability in the application, we can't operate in a single memory space. The application needs to publish data that it knows will be needed in a few ms to the locations where its needed, achieving the QoUS required. Other locations can be updated more leisurely. That was one of the reasons for moving from a single priority queue in the Solr bundle 1.1 release to a multiple priority queue in the Solr bundle 1.2 release. That improvement doesn't help the fundamental problem (bear with me, I will get to the point soon) that is not present in a single JVM cluster. Writing to a large distributed inverted index, so that all views of that index are consistent, is not instant. Certainly not in Solr4. So the application, that wants to scale and have no single point of query or failure, must accept that when an update is made, not all dependencies of that data will be updated instantly. OAE is not there yet. It probably demands that OAE looks at what data needs to be where and when. Data with a high QoUS (ie low latency) should be explicitly published within the request cycle. Data with low QoUS should be indexed asynchronously. The request accessing the published data will need to convert from queries through the bitmap of the inverted index into get by pointer operations. This will enable the application to break out of the bottleneck that it been presented with (finally the point). A Solr index only allows a single writer. You cant update the same document in the same Solr core from multiple JVMs or VMs. AFAIK merging commits from multiple segments from different Solr servers on independent disconnected timelines into a single index core is not supported. There is a hard 1:1 relationship between the index writer and the core being updated. So if you lose the process managing the update operation, you loose the ability to update the core.

The Solr bundle used in OAE addresses this by queuing update events in a persistent disk based transactional queue. When the Solr master, the only Solr instance managing the Solr core in question dies, events remain in the queue pending being processed. When the master comes back, the queue restarts update operations and the data that was changed enters the index. This is not rocket science, its very simple, but it does require that the UI isn't expecting anything in that queue to be available on the next Ajax request. AFAIK, OAE is not in that place yet.

## CSU's OAE/Solr Cluster

So back to the clustering. We have a cluster up and running at CSU. You will remember from Part I, that bouncing app server nodes works. A UI user doesn't know or notice their state is wandering about the cluster as app server nodes go up and down. All the queries that app server makes to the Solr server are load balanced and the LB algorithms inside the LBHttpSolrClient that comes with Solr instantly recognises when a Solr slave dies or becomes available. So the users have no idea what might be happening in the underlying infrastructure. When the master Solr instance, off which all the slaves are feeding, dies, indexing operations pause, queuing up events on each app server node. When the Solr master comes back, indexing restarts. The write operation to the queue is concurrent and thread safe allowing both synchronous and asynchronous notification events to be persisted in the queue. That write operation is also detached from the indexing operation, so when indexing stops, the application server continues as if nothing had happened. Provided the UI does not place great dependence on data flowing through this route, no user will notice that the Solr master has been taken offline. As any ops person will tell you, it was taken of line... it didn't just die. Just remember to ask, what took it offline?

## Other issues encountered

Prior to release 1.2 and the work at CSU we were using the StreamingSolrUpdateServer. This is an efficient implementation of the SolrJ client that has a memory queue, and multiple queue processor threads. That queue and pool of workers allows the client to interleave network latency parallelizing multiple concurrent update operations and allowing those to be managed by the worker threads. Only when the client commits does the main client thread block while all previous update threads complete and the queue is emptied. There are several issues here. In the current Solr4 implementation, errors on operations performed by the pool of threads are not communicated back to the main client thread. Hence it has no way of knowing when a remote update server has failed. Only when a commit is performed does the main client thread know there was a problem. This is not too much of a problem for when the server goes down, since the commit will be the last operation and hence rollback the entire update transaction in the client. It also doesn't matter that the in SolrJ client memory queue is lost, since the on disk queue never gets committed and the document IDs are immutably bound to the content they represent, hence indexing twice does no harm. The problem comes when the queue restarts. The client only knows that the commit completed. It doesn't know how many of the index update operation performed in that transaction where sucessfull, hence with the StreamingSolrUpdateServer we find that on restart partial update transactions get through to the index. Switching to the ComonHttpSolrServer, which uses the client thread for all operations addresses this issue.

One of the other issues that appeared was that with more than one queue, sharing the same update SolrJ client, commits on one thread would commit operations on the other thread. The classes are thread safe but the transactions inside the SolrJ client are not bound to a transaction context and so the SolrJ clients can't be shared between transactions. We now bind SolrJ clients to transaction contexts.

The work doen at CSU will make it into the Solr bundle in the 1.3 release, and any changes that were made to the core code will undoubtedly make it into the managed project code base. A selection of lead developers from the managed project have access to the CSU private repository.

[![](https://ik.imagekit.io/htj4bin8p/2011/11/csucluster.png)