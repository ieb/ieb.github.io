---
layout: post
title: 'Clustered Index in Search'
description: ""
date: Fri Jun 09 2006 00:20:36 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/09/clustered-index-in-search/
categories: "Search, Thought"
hero: ../../../defaultHero.jpg
---
After spending many hours with a hot CPU, I finally came up with and efficient mechanism of indexing in real time in a database clustered environment. I could have put the Lucene Index segments directly into the database with a JDBCDirectory from the Compass Framework. But unfortunately the MySQL configuration of Sakai prohibited the emulation of seeks within BLOBs, so the performance was hopeless. Im not convinced that emulating seeks in BLOBS actually helps as I think the entire BLOB might still be streamed to the App server from the database.

Normally you would run Lucene using Nutch Distributed File System, which borrows some concepts the the Google File System. NDFS is a self healing shared nothing file system tuned for use with Lucene.... but its not easy to set up from within a Java app, and it has to have some dedicated nodes, dedicated to certain tasks.

Failing that you might run rsync at the end of each index cycle to sync the Index onto the cluster nodes. I think this was the preferred method prior to NDFS. However, its a bit difficult to get to EXT3 inodes from within a Java app, and Sakai runs on Windows and Unix, so I cant rely on the native rsync command.

The solution that has just gone out to the QA community, was to use the local FSDirectory to manage local copies of the index segments, and once an index write cycle is complete, distribute the modified segments via the database. In testing, I tried this against MySQL with about 10GB of data in 200-300 K documents. It worked Ok. I'm waiting with baited breath to see how many JIRA items as posted against this, as everything that flows over the Sakai Entity bus is seen by the indexer. Nice not to have a component that just gets tested whatever is done in QA!
