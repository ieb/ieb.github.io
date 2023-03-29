---
layout: post
title: 'SparseMapContent 1.0 released'
description: ""
date: Fri Aug 26 2011 14:30:03 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/08/26/sparsemapcontent-1-0-released/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Normally I would announce this sort of thing on a mailing list, but I dont have one, so this is the next best thing. SparseMapContent v1.0 has just been released. Its a project I started almost 12 months ago to enable Sakai OAE to store user generated content in shallow wide hierarchies, where 1000s of users would be performing updates, potentially served by an elastic cluster. It stores its content in a simple key value store with rdbms storage on Derby, MySQL, Oracle, PostgreSQL or column storage on Apache Cassandra or Apache HBase. In addition there are both bitstream stores for shared filesystem or as blocks within the the underlying column database. It comes bundled as an OSGi bundle intended to work with Apache Sling.

Released with SpraseMapContent is a Solr bundle based on a Snapshot of Solr 4, intended to provide a free text and keyword index for the content stored in SparseMapContent. That bundle maintains a persistent queue of pointers to content to be indexed filled by OSGi events, and indexer framework that resolves the pointers and indexes the content including metadata, and a search index. This bundle is also used by Sakai OAE, although like the SparseMapContent bundle it could be used by any application wanting to maintain a Solr index from an event stream.

If you dont like the names, neither do I and suggestions are welcome. Thank you to all those who have made contributions over the past 12 months.

Maven Repo:[ http://www2.caret.cam.ac.uk/maven2](http://www2.caret.cam.ac.uk/maven2)

```
    <dependency>
     <groupId>org.sakaiproject.nakamura</groupId>
     <artifactId>org.sakaiproject.nakamura.core</artifactId>
     <version>1.0</version>
    </dependency>
    <dependency>
     <groupId>org.sakaiproject.nakamura</groupId>
     <artifactId>org.sakaiproject.nakamura.solr</artifactId>
     <version>1.0</version>
    </dependency>
```

Code bases, issue trackers, etc

```
<a href="https://github.com/ieb/solr">https://github.com/ieb/sparsemapcontent</a>
<a href="https://github.com/ieb/solr">https://github.com/ieb/solr</a>
License: Apache 2
```
