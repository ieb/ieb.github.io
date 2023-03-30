---
layout: post
title: 'Deploying/Tuning SparseMap Correctly: Update'
description: ""
date: Thu Mar 01 2012 01:44:26 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/03/01/deployingtuning-sparsemap-correctly-update/
categories: "SparseMap, Uncategorized"
hero: ./img/2012-03-screen-shot-2012-03-01-at-12-28-14.png
---
In the last post I reported the impact of using SparseMap with caching disabled, but at the same time noticed that there was a error in the way in which JDBC connections where handled. SparseMap doesn't pool JDBC connections. It makes the assumption that anyone using SparseMap will read the Session API and note that Sessions should only be used on one thread during their active life time. Although the SparseMap Session Impl is thread safe, doing that eliminates all blocking synchronization and concurrent locks. If the Session API use followed, then JDBC connections can be taken out of the pool and bound to threads which ensures that only 1 thread will ever access a JDBC connection at any one time. When bound to threads, JDBC sessions can be long lived and so are only revalidated if they have been idle for some time. If any connection is found to be in a error state its replaced with a fresh connection.

In Sakai OAE 1.2, with SparseMap caching inadvertently disabled, and JDBC connections being validated on every request, there were about 500,000 SQL operations in the short load test. With those issues addressed, the number of SQL operations drops to 6600, **removing almost 1000s (over 15 minutes) from the 1h load test execution time** and removing JDBC entirely from the list of JVM hot spots. Notice that in the last hotspot SparseMap is showing almost no time being blocked by sync operations, although there is more time spent suspended than I would like which needs to be investigated. I cannot stress how important it is to make certain that caching is working properly if you are using SparseMap. Here are the results, which I cant take any credit for. The Load testing was performed by Jon Cook at Indiana University, full details can be found at <https://uisapp2.iu.edu/confluence-prd/display/ONC/OAE+Evaluation+Load+Test+Results>

![](https://ik.imagekit.io/htj4bin8p/2012/03/screen-shot-2012-03-01-at-12-28-14.png)

![](https://ik.imagekit.io/htj4bin8p/2012/03/screen-shot-2012-03-01-at-12-27-44.png)

![](https://ik.imagekit.io/htj4bin8p/2012/03/screen-shot-2012-03-01-at-12-28-46.png)

[![](https://ik.imagekit.io/htj4bin8p/2012/03/screen-shot-2012-03-01-at-12-29-00.png)
