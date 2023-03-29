---
layout: post
title: 'Getting somewhere, not sure where'
description: ""
date: Tue Jan 04 2011 14:29:16 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/01/04/getting-somewhere/
categories: "Uncategorized"
hero: ./img/2011-01-screen-shot-2011-01-04-at-13-53-06.png
---
Finally I feel like I am getting somewhere.

[![](/img/2011/01/screen-shot-2011-01-04-at-13-53-06.png)

This is JConsole showing Heap, half way though a load test uploading pooled content. There are 20 threads hitting the server from JMeter with no pauses uploading files from 50K down to 1K in size. JMeter is reporting throughput of between 75 and 108 files per second depending on if I have the Terminal window with the log flying past open and JMeter GUI open. This is using the sparse sessions I mentioned earlier, with shallow sizes around 80 bytes (deep about 1K) and JDBC connections bound to threads, which is probably why the heap is static and flat around 100MB. The X axis is time of day.

The other change that has been made, is browed from the optimisations I did to Sakai 2.4 Content Hosting Service. There the bodies of objects were serialised to byte\[] before injecting into the DB. I had been using key value pairs direct in the DB, however as with the early Jackrabbit persistence managers that generates a lot of SQL insert update traffic. Select traffic is mostly eliminated with one shared concurrent cache. Unlike the Jackrabbit Bundle persistence manager that stores a range of nodes in a blob, I am storing one content map per blob on the basis that it keeps the session small and simple, and ensures that the updates hit fewer content maps. That vastly reduces the indexing load on insert and update a the DB, drops the SQL insert update traffic by an order of magnitude and doesnt appear to impact serialization/deserialisation. Its also closer to the column concepts used in the Cassandra driver for this sparse content map system where the Thrift client is performing the serialization/deserialization for free.

The downside is that the ability to use the DB to search on any field is gone. Actually thats no bad thing, since we didnt want to search on 90% of the fields anyway, they were just payload. This "indexing" has now be replaced by dedicated indexing tables for each column family that only contain the fields and values that need to be indexed. This vastly drops the indexing and insert/update load on the DB since its only considering things that the developer really wants to index, and we are still using Solr as a "not quite so real time" (tm) secondary index.

If I look back through my blog archives I notice that this was the model that was proposed for Nakamura (then K2) right at the start. The main difference being we were also writing our own component manager. With hindsight writing out own component manager was dumb, but I should have stuck to my guns on the indexing mechanism and done more of my own testing.

For those in Sakai 2.x world who are wondering. This content system is rather like Content Hosting Service; without the 100 or so API methods, with per object hierarchical ACLs, with git like versioning, with hard links, with soft links and with the ability to use Column databases as well as traditional RDBMS's. I also suspect from the heap usage in this test..... its a bit lighter on resources.
