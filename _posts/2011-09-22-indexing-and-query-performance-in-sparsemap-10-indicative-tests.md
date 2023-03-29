---
layout: post
title: 'Indexing and Query Performance in SparseMap 1.0, indicative tests'
description: ""
date: Thu Sep 22 2011 00:50:56 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/09/21/indexing-and-query-performance-in-sparsemap-1-0-indicative-tests/
categories: "Uncategorized"
hero: ./img/2011-09-derby-query.png
---
Since early late May early June, it became apparent that the the table based indexing approach in Sparse Map used by Sakai OAE had problems. Performing queries on large key value tables can work, provided those queries are simple in nature and the volume of records in the table is not excessive. In fact parts of Wordpress's ontology store use this approach. Unfortunately in Sakai OAE the key value table grows at 10-120 times the rate of the main content store which grows at 2x the number of content items. In addition to this the queries that need to be performed on this table are paged, sorted and distinct. Not surprisingly that generates a performance issue. It first became apparent in Derby where it was really obvious. So obvious that Sakai OAE 1.0 RC1 would grind to a halt after running in integration test suite on Derby. Those issues were fixed for the Derby driver with the 1.0 release of SparseMap on which Sakai OAE 1.0 was based. Unfortunately, further testing shows that all other databases are effected. I say all, I mean MySQL and PostgreSQL since I dont have access to an Oracle DB at the moment to test... but there is a high probability that it will also be effected. To show the impact, here are some comparative graphs. The first one shows Derby query performance at the OAE 1.0 RC1 tag. Fortunately this is not what was released since SparseMap 1.0 contains a fix for the problem. At the time the consensus was that the problem did not effect MySQL or PostgreSQL and so some extents thats true, however detailed testing shows that the problem effects MySQL and PostgreSQL and presumably Oracle.

So what does this really mean ? It means that any page that relies on a data feed that uses SQL queries will slow dramatically. These tests are only for 10K objects, which sounds like a lot, but is not. Each content item needs 2 objects. A single user might have 20 content items in their home space, so with 100 users there are 4K objects before anyone has logged in. Once those users log in they will create pages and upload content. A content item typically has 100 embeded items, so the reality a small pilot of 100 users will reach 100K items in a few weeks.

Ignore the Derby OAE 1.0 RC1 graph, its irrelevant, but look at the MySQL OAE 1.0 graph. The pattern for the OAE 1.0 is a 4x increase in query times per doubling of number of rows. At 100K items queries may take upto 1000ms to execute, which means that a page with 1 SQL based feed will take at least 1s to return. Most pages have many more data feeds than that. Since this post is based on evidence, I will stop there and leave it to the reader to extrapolate.

#### What can or should be done ?

Short term:

- Don't run Sparse Map in key value indexing mode on RDBMS back ends if you have more than a few columns to index or are asking it to perform direct and complex queries. Ie dont use SparseMap 1.0. Unfortunately non of the NoSQL drivers support complex direct queries and all the RDBMS drivers in SparseMap 1.0 suffer from the problem... except Derby which strangely might be a better production DB for OAE 1.0 than MySQL or PostgreSQL.

Long Term:

- Dont, unnecessarily create massive content trees with deep hierarchies to represent simple objects. Unpacking a JSON tree of single objects will do just this. If there is no need to do do it then its wasteful and would be better stored as a single property resulting in 1 or 2 content items per conceptual object.
- Don't rely on indexing as a substitute for publishing data in the right form for 99% of the queries (ie write exactly what you want to read once, and read it billions of times). Although the MySQL query cache does a good job of caching query results, in a situation where there is a high write traffic, the cache gets invalidated regularly.
- Dont think that inverted indexes will eliminate the problem. All have latency or cardinallity issues and most have clustering issues which is why anyone running at scale in a cluster always puts a quality of service or data delivery parameter on data being written to data appearing in the index. There is plenty of material on this subject on the devops blogs at places like LinkedIn or Facebook.

[![](/img/2011/09/derby-query.png)
