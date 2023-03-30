---
layout: post
title: 'Deploying/Tuning SparseMap Correctly'
description: ""
date: Sun Feb 26 2012 22:00:35 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/02/26/deployingtuning-sparsemap-correctly/
categories: "SparseMap, Uncategorized"
hero: ./img/2012-02-screen-shot-2012-02-27-at-07-58-07.png
---
# Deploying

SparseMap is designed to maintain a shared cache of recently accessed maps in memory. The code base itself is also designed to use a little memory as possible. The SparseMap app server runs happily at load in 20MB of heap. Sakai OAE which is the main user of SparseMap uses a little more than that (around 200MB) leaving the remainder of heap available for caching. If caching is working correctly, and there is sufficient heap available for the number of active users the profile of calls to the storage layer should show almost no reads and a low level of writes. If however a mistake is made then the impact is dramatic. The first trace here shows Sakai OAE as of 2nd Feb 2012 running SparseMap 1.3 with a missconfigured cache setup. The image shows the SQL report from Neoload.

[![](https://ik.imagekit.io/htj4bin8p/2012/02/screen-shot-2012-02-27-at-07-58-07.png)

You can see that there a colossal number of SQL statements performing a query on parent hash and there are also massive number of other queries. Obviously something is not right.

Compare that with Sakai OAE on 23 Feb 2012 running SparseMap 1.5 with caching configured

[![](https://ik.imagekit.io/htj4bin8p/2012/02/screen-shot-2012-02-27-at-07-58-39.png)

The query profile has completely changed with almost everything being served from cache in this test. The 282189 queries taking **577s** for parenthash has become 325 queries taking **0.645s** The message here is, dont deploy SparseMap without caching enabled, and check that it is enabled and sized correctly. There are periodic log statements coming from SparseMap will indicate the performance of the cache which should always be running at over 80% hit rate.

# Tuning

SparseMap comes with a default configuration for SQL and DDL. It may be perfectly OK for most installations never needing any tuning, but the design and implementation assumed that deployers would tune both the DDL and SQL.

## Tuning DDL

The DDL that comes with the RDBMS drivers is a default SQL schema. It makes the assumption that the deployment is going to be small to medium in size and probably never see more than 1M content items. If after sizing a production deployment its clear that the application will contain more than 1M items then some tuning of this DDL must be done. How much depends on how big the installation will be. The internal structure of SparseMap was designed to use database shards in the same way that YouTube's metdata store does. The sharding is performed on the first 2 characters of the row key giving a theoretical maximum number of shards of 64^^2, although the configuration file will become unmanageable with that many shards.

Even if sharding is not required, the indexing operations within SparseMap will need tuning. If SparseMap should only be configured to index the column values that the application needs to index. By default there is only a single very wide indexing table which can become extremely inefficient. Its columns are by default large varchars and for many situations this will be very slow and wasteful. Once the client application knows what its indexing tables need to look like it should create those tables before SparseMap starts up so that each (yes there supposed to be more than one index table) table is dense and efficient with properties that are queries and indexed by the same use case living in the same table. If the application has chosen to use non real time querying (eg by using Solr), then it should ensure that SparseMap is not unnecessarily indexing data that it will never use.

## Tuning SQL

One of the main requirements for SparseMap was that it would allow UI devs to store and query any unstructured data without having to write a line of Java code. Consequently the queries it generates are not the most efficient. The design always assumed that deployers would at some time need to tune the SQL the application was hitting the database with, and they would also want to do that without touching a line of Java code. All the SQL is in property files to allow deployers to tune in production.

To assist a deployer in tuning, users of SparseMap should name all their queries by adding setting the property "\_statementset" on each query to a different name. If that is done, then the deployer can bind customised tuned queries to each value of \_statementset. The binding of queries also takes account of sharding if the storage layer has been sharded.

This only gives an introduction to deploying and tuning SparseMap. I would be astounded if SparseMap was so elegant that it could be deployed into production without ensuring caching was configured correctly, the DDL was adjusted and the SQL was tuned were appropriate.

For the observant amongst you the NeoLoad SQL reports have revealed a rather obvious bug that needs attention. SQL connections are bound to threads not to the pooled storage client implementation. When the storage client implementation is borrowed from the pool, the SQL connection associated with the thread performing the borrow operation is validated, in this case, Oracle, select 1 from dual is executed. Since the connection is thread bound this is unnecessary and accounts 496s or the 509s consumed by the load test. I intend to remove most of that in the next release as the validation approach is incorrect, and does not protect against SQL failure mid request. Correctly configured caching did, thankfully, reduce the SQL portion of this load test from **1064s** down to **509s**, although I think it should be possible to reduce that to arround **120s. **At which point the load test will need to be upgraded.

## Update: 29 Feb 2012

The high levels of _select 1 from dual_ have been eliminated. Duffy Gillman from rSmart did the bulk of the work a few months ago in SparseMap 1.5 however he/we/I failed to remove all the places where connections were verified unnecessarily. The issue was fixed with commit [778a0bfe97963dccf46566a431853bab6f7c87cc](https://github.com/ieb/sparsemapcontent/commit/778a0bfe97963dccf46566a431853bab6f7c87cc) which is available in the master branch of SparseMap for Sakai OAE to merge into their fork of the codebase. Hopefully, the improvement will show up in the next round of load testing, and should also remove JDBC as the top hotspot.
