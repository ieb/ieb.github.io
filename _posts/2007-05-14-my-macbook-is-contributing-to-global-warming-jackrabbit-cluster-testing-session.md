---
layout: post
title: 'My MacBook is contributing to global warming. (Jackrabbit Cluster Testing Session)'
description: ""
date: Mon May 14 2007 23:38:52 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/05/14/my-macbook-is-contributing-to-global-warming-jackrabbit-cluster-testing-session/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Only by a few watts, testing Jackrabbit in a cluster. I have been testing a 2 node cluster of Sakai with JCRService with 2 data sets. Once it lots of small files, 9,215 files in 178Mb, some indexable, and the other 100 or so files of mixed type for 315MB. The single node cluster (ie no cluster) works seamlessly, uploading 4 files/second for the smaller files and growing the heap by about 100M every 2 minutes, which gets GC's back down to a baseline of about 160M, probably about 1M per request. Looking at the CPU time, most time appears to be spent syncing the data down to the DB, which is good, indicating that the JCR is running as fast as the DB can accept data.

I am running with standard Jackrabbit 1.3 persistence managers and cache journal with everything going to the DB. (well standard apart from a bug I fixed in the journal code) Each node has its own repository home.

Of the larger dataset, I have uploaded this several times and copied it within the JCR using webdav several times so there is at least 1G of content.

This isn't exactly a full test, but its a start and indicates that Jackrabbit 1.3, using pure DB persistence for Version, Bodies and nodes (using the SimpleDbPersistance) works well in a cluster.

I also tried the File Journal, but found that there were some hanging issues under high load, indicating that transactional stability is important for the journal and the distributed mutex mechanism on the file journal may have concurrency issues. I haven't verified this, but looking at the behavior in JProfile points to this.

As I said, this test is with the standard classes, that manage their own connections the DB, I am intending to look into using the sakai datasource to open connections.... however some work may need to be done since Jackrabbit appears to manage the connections actively, rather than allocating 1 connection per request thread.
