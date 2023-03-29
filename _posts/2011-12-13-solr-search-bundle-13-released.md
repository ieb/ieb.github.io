---
layout: post
title: 'Solr Search Bundle 1.3 Released'
description: ""
date: Tue Dec 13 2011 00:28:27 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/12/13/solr-search-bundle-1-3-released/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
he Solr Search v1.3 bundle developed for Nakamura has been released. This is not to be confused with Apache Solr 4. The bundle wraps a snapshot version of Apache Solr 4 at revision 1162474 and exposes a number of OSGi components that allow s SolrJ client to interact with the Solr server.

In this release 2 bugs were identified and fixed. These bugs relate to the reliability of remote servers in a Solr cluster and the reliability of the indexing queues.

As always, thanks goes to everyone who contributed and helped to get this release out.

```
Issues Fixed: https://github.com/ieb/solr/issues?sort=created&direction=desc&state=closed&page=1&milestone=4
Release Tag: https://github.com/ieb/solr/tree/org.sakaiproject.nakamura.solr-1.3
```

Downloads are available from the release tag.

To Use from a maven2 project

```
 
    <dependency>
        <groupId>org.sakaiproject.nakamura</groupId>
        <artifactId>org.sakaiproject.nakamura.solr</artifactId>
        <version>1.3</version>
    </dependency>
```
