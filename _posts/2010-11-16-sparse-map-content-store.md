---
layout: post
title: 'Sparse Map Content Store'
description: ""
date: Tue Nov 16 2010 13:16:20 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/11/16/sparse-map-content-store/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
While doing soak tests and endless failed release candidates for the Sakai3/Sakai OAE/Nakamura Q1 release I have been experimenting with a content store. This work was triggered by a desire to have support for storage of users, groups and content with access-control that a) clustered and b) didn't have concurrency issues. I also wanted something thin and simple so that I could spend more time of making it fast and concurrent than having lots of features. The original implementation was done in Python (btw, thats my second Python app), in about 2 days on top of Cassandra, but the Sakai community is Java so although that was really fast to implement and resulted in code that had all the concurrency required, it wasn't any good for the bulk of the community. (Community over code). The re-implementation in Java has taken several weeks part time, but along the way APIs have appeared, and what was hard coded to work on Cassandra, is now based on an abstract concept of a sparse map, or sparse array. Data is stored in rows, and each row contains a set of columns from a potentially infinite set of columns, ie a Column DB. All of the objects (Users, Groups and content) can be stored in that structure and with modification based operations on the underlying store the API is amenable to being stored in many ways. So far I have drivers for Memory (trivial Concurrent Hash Maps), JDBC (MySQL and Derby) and Cassandra. Content bodies are slightly problematic since some of these stores are not amenable to streaming GB of data (Cassandra & JDBC) so the driver also has a blocked storage abstraction that collects together chunks of the body into block sets. As currently configured a block set is 64 1MB blocks in a single row stored as byte\[] columns. Where a streamable source is available (eg File) there is a driver to stream content in and out direct from file. The code base has minimal dependencies, the main one being Google Collections for its map implementations and so it should be possible to create a driver for BigTable and run inside an App Engine.

All of this is vaguely interesting, but how does it perform?

With simple layers and no synchronisation the Memory based driver is almost perfectly concurrent when tested on my MacBook Pro provided the JVM can get the CPU cores. It creates uses at about 20K users per second without any optimisation, which in itself would create some interesting opportunities to queue modifications asynchronously. It also reads and writes blocked content at about 1GB/s which is probably just the memory bandwidth inside the JVM, indicating that the block abstraction is Ok. Those trivial tests just confirm that the thin upper layers don't introduce concurrency issues. The JDBC driver on MySQL peaks at around 100 user creations per second with streaming at about 50MB/s write and 1GB/s read which is again probably direct form memory cache. Concurrency efficiency is not high with MySQL indicating some fundamental synchronization in the JDBC driver or MySQL configuration, as expected. The Cassandra driver gives about 3K user creations per second, is concurrent upto the number of cores, writes in blocked mode at 13MB/s and reads at 70MB/s. Although the streaming speed seen in this mini viability test is not great, it looks like block storage of bulk content inside Cassandra is viable. Obviously all of this a very rough test with threads from multiple processed fighting each other for CPU cores, but it does show that.

- So far the implementation is concurrent, limited by the underlying storage tech.
- A Sparse Map/Sparse Array abstraction for content storage works on Column, Memory and JDBC drivers with relative ease.
- Performance looks adiquate for my needs.
- Implementing something like this in Python with test coverage is way quicker than in Java, but also less engineered.

Next steps:

- look at read and write through cache drivers, as all the above has no caching enabled. (other than the memory driver)
- See if a Jackrabbit User Manager can be implemented over the top of this.
- See if a Sling Resource Resolver can be implemented over the top of this.

Code is at <https://github.com/ieb/sparsemapcontent> but now that the Q1 release of Nakamura has gone out, I should really get back to the day job.
