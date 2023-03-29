---
layout: post
title: 'Sakai CLE ElasticSearch'
description: ""
date: Thu Oct 11 2012 07:50:56 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/10/11/sakai-cle-elasticsearch/
categories: "Apache Solr, ElasticSearch, Lucene, Solr, Tony Hoare, Uncategorized"
hero: ./img/2012-10-screen-shot-2012-10-11-at-17-48-24.png
---
[![](./img/2012-10-screen-shot-2012-10-11-at-17-48-24.png "Screen shot 2012-10-11 at 17.48.24")](http://ianboston.files.wordpress.com/2012/10/screen-shot-2012-10-11-at-17-48-24.png)A long time ago, I wrote a search module for Sakai 2 as CLE was known then. It attempted to make every node in a CLE instance share the load of indexing and searching and make the search aspect of a CLE cluster scale elastically. To some extents it worked, but it had problems. The indexing queue was persisted in a DB table and it was based on a old version of Lucene that didn't have anything as useful as commits. Consequently it could get its segments into a bit of mess at times. The world has moved on in the 5 years since I wrote that code, and two viable alternatives for supporting Search in Sakai CLE have emerged. [Apache Solr](http://lucene.apache.org/solr/ "Apache Solr") and Elastic Search. Both can be run as remote servers or embedded. Both are solid reliable releases. It could be argued that Solr has more support for sophisticated index schema, and it's probably true that Elastic Search is easier to deploy for elastic scaling and real time indexing as that's its default behaviour.

For those wanting to try Sakai CLE with Apache Solr as the search server then look no further than the work that Adam Marshall has been doing at Oxford University. That allows you to spin up a Solr instance and connect your Sakai CLE instances to it. You will have to do some reasonably sophisticated master slave configuration to make it resilient to failures and don't expect the indexing operations to be real-time. There are plenty of references to the work required to do that in this blog, and arguments why I currently prefer ElasticSearch over Solr.

## Deployment and reliability

[ElasticSearch](http://www.elasticsearch.org "ElasticSearch") comes out the box being real-time, elastic and cloud aware, with built-in AWS EC2 knowledge as well as rack awareness. Its been built to shard, partition and replicate indexes out of the box. The ElasticSearch client as I am finding out is simple to embed into most environments including [OSGi](http://www.osgi.org "OSGi") and when embedded makes each app server node a part of elastic search cluster. Best of all, for the nervous by nature, is the resilience that comes from spinning up more than 3 instances in the same cluster. In fact, I have been finding it hard to damage elastic search indexes in tests. It's perfectly possible to do all of this with Solr, but the deployer has to work a little harder adding some custom components to support a writeahead log and a Zookeeper instance to manage the cloud.

## Metadata Indexing

Probably the best part of ElasticSearch is the client which is a fully multithreaded client following the same pattern [Communicating Sequential Processes](http://www.usingcsp.com/) first described by [Tony Hoare](http://research.microsoft.com/~thoare/) and one of the motivators for the [Go language](http://golang.org "Go (programming language)"). This allows a client for submit suitably light weight indexing requests to the ElasticSearch cluster via an embedded client without needing to think about managing a queue or the latency of indexing. This nice little feature turns the 1000 lines of code I had to write for Sakai CLE and OAE search into about 20. Initial tests show that indexing can be done within the request loop and because of the true real-time nature ElasticSearch with its write ahead log, results are available about 50ms after the transaction commits. To maintain that latency, I only index metadata via this route. Document indexing takes a different route.

## Document Indexing

I found with the original Sakai 2 search and subsequent Solr based indexing of documents in Sakai OAE that indexing bodies was expensive. In some instances tokenizing office documents could place extreme strain on a JVM heap. For that reason when I did the indexing service in the Django version of OAE I did two things. I offloaded the document body indexing operations to separate processors driven by a queue of events, following the CSP pattern mentioned above, and I made the content store single instance. Where users collaborate, they often upload the same document. With a single instance content store, only a single instance of a document is stored and hence, tokenizing and information extraction is only performed once. This greatly reduces the cost of indexing. The store isn't collision perfect but by performing a hash on the document body as its saved its possible to eliminate most if not all collisions. Certainly SHA1(ing) enough of the body eliminates all collisions.

So the document indexing processes use the index to locate documents that need to be indexed and then use the single instance content store to eliminate duplicate tokenizing. Using this approach in the Sparse Content Map content system which is already single instance has a dramatic impact on IO. Sakai CLE Content Hosting Service is not single instance at present but could be adjusted to be so once hashes are known. It would be nice to fix that aspect of CHS at some point.

## Current state

I am still working on this code, and this post is part notes, part notification should I get distracted. My testbed is the Sparse Content Map content system only because it builds in 20s, starts in 5, has full integration test coverage and compliant webdav support thanks to Milton. There is currently nothing in the code base that prevents it using Spring or a Webapp container as opposed to OSGi, and the coupling is loose being event driven. The best part is the result should scale as far as ES can scale which is probably a lot larger than any CLE instance in production.
