---
layout: post
title: 'Solr Search Bundle 1.2 released'
description: ""
date: Fri Nov 18 2011 02:21:42 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/11/18/solr-search-bundle-1-2-released/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
The Solr Search v1.2 bundle developed for Nakamura has been released. This is not to be confused with Apache Solr 4. The bundle wraps a snapshot version of Apache Solr 4 at revision 1162474 and exposes a number of OSGi components that allow s SolrJ client to interact with the Solr server.

This release fixes a number of bugs related to concurrency and and the indexing operation identified by moving from a single threaded indexing operation to a muli threaded indexing operation. These bugs were introduced in the previous release. These were introduced by sharing a StreamingSorUpdateServer between multiple threads. Although the class is thread safe and after about June 2011 it does not hang, it does contain an internal memory based queue that asyncronously sends updates to a remote server. I should state, and you guessed it, that this only impacts situations where the Solr server being updated is not in the same JVM. The problem is that should any of the updates fail, no communication of that fact propagates back to the thread that performed the update operation. In the case of the Solr bundle we attempt to make the indexing queue reliable with a transactional, persistent queue. However, since we dont know if the update operation failed, we have no chance of working out what to do with the batch of updates being processed. This release fixes those issues. It also fixes a number of clustering and failover issues discovered at Charles Sturt University which I will leave for a follow up post.

Other improvements are listed with the issues fixed against this version, link below. As always, thanks goes to everyone who contributed and helped to get this release out.

```
Issues Fixed: https://github.com/ieb/solr/issues?sort=created&direction=desc&state=closed&page=1&milestone=3
Release Tag: https://github.com/ieb/solr/tree/org.sakaiproject.nakamura.solr-1.2
```

Downloads are available from the release tag.

To Use from a maven2 project

```
 
    <dependency>
        <groupId>org.sakaiproject.nakamura</groupId>
        <artifactId>org.sakaiproject.nakamura.solr</artifactId>
        <version>1.2</version>
    </dependency>
```
