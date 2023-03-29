---
layout: post
title: 'Solr Search Bundle 1.1 released '
description: ""
date: Fri Oct 28 2011 07:02:19 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/10/28/solr-search-bundle-1-1-released/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
The Solr Search v1.1 bundle developed for Nakamura has been released. This is not to be confused with Apache Solr 4. The bundle wraps a snapshot version of Apache Solr 4 at revision 1162474 and exposes a number of OSGi components that allow s SolrJ client to interact with the Solr server. This release adds a priority based queue to enable Quality of Service commitments to be made against a request to index a content item, and that item appearing in the index. Those commitments are fulfilled with parallel queues ensuring that the indexing happens within the requested time, not blocked by less urgent items. The queues are persistent and reliable ensuring that should a remote Solr server fail, the request to index will not be lost. Optionally a deployer can specify that real time indexing is enabled using soft commits by configuration of the queue and the Solr server. Other improvements are listed with the issues fixed against this version, link below. Thanks goes to everyone who contributed and helped to get this release out.

```
Issues Fixed: https://github.com/ieb/solr/issues?sort=created&direction=desc&state=closed&page=1&milestone=2
Release Tag: https://github.com/ieb/solr/tree/org.sakaiproject.nakamura.solr-1.1
```

To Use from a maven2 project

```
 
    <dependency>
        <groupId>org.sakaiproject.nakamura</groupId>
        <artifactId>org.sakaiproject.nakamura.solr</artifactId>
        <version>1.2</version>
    </dependency>
```
