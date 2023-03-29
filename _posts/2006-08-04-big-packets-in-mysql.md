---
layout: post
title: 'Big Packets in MYSQL'
description: ""
date: Fri Aug 04 2006 13:18:18 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/08/04/big-packets-in-mysql/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Once again we discover that putting lots of data into the DB as blobs is not the best thing to do. In this case is the search segments with MySQL. If you chuck 4 - 5 in blobs into MySQL Innodb tables, then everything runs a little slow on that table. You cant perform seeks on the blobs (not real ones) and when you try and retrieve them you find a practical file size limit somewhere below 2G as you might expect on a normal 32bit file system, not because MySQL cant cope with the data, but because the connectors and things on the network timeout.

When I wrote he clustered search engine for sakai, one requirement was that if would work out of the box in a cluster, so we put everything into the DB. Thats find for upto 20-30K document under light load, but put a few more in and a bit of load and the above problems start to expose themselves.

Fortunately the storage architecture in the search engine in sakai is not dissimilar to parts of Jackrabbit. There is a persistence manager, and a virtual filesystem. Obviously it has different aims and if far simple, but it should be relatively easy to make it use a shared file system space rather than the DB, as it only has one class where all the storage comes together (thats one small class).

Anyway, I'll see what happens.
