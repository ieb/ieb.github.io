---
layout: post
title: 'Search was broken'
description: ""
date: Fri Apr 20 2007 14:10:40 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/04/20/search-was-broken/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I've been breaking search in a big way over the last week, but its fixed now (everything crossed)

The test environment is a 2 node cluster both nodes running flat out indexing and Apache Benchmark hammering the search interface with 5 concurrent users doing 10000 requests flat out against each cluster node.

Its not a full blown performance test, but it stresses the environment enough to expose the 1 in 100,000 failure events.

The merging algorithm was a bit dumb in 2.3 that caused small segments to be created and not merged into larger ones as quickly as would have been nice. This has changed. New index cycles generate new temporary segments, these are merged into the current active segment, and the result is distributed to the cluster. When the size of the active segment exceeds a limit, currently 20M, a new active segment is started.

When there are more then 10 segments, these are merged into 1 larger segment which is optimised in the process to remove deleted documents adn re-order numbering. Every time this happens a new segment is created and distibuted to the cluster.

So there 1 large segment and upto 9 smaller segments. When the 1 large segment reaches a second size (1.5G) it is frozen a a new large segmetn is created. The indexing process will eventually create many large segments which a sysadmin migh want to merge.

The index is now much more compact, containing no content wich means that it grows much slower related to the size of the language being indexed and the number of items, not the size of each item, so although the frozen segments are created by the process I would expect to see 1 frozen segment for ever 10 - 20 M documents, (wild guess, but I know 100,000 documents is fitting in 200M and the rate of growth is less than linear)

Since the index grows much more slowly now, its a bit hard to test with the default settings, so these can be adjusted in sakai.properties.

If you want to do a rapid test you can use the following sakai.properties

soakTest@org.sakaiproject.search.api.SearchIndexBuilderWorker=true `segmentThreshold@clusterSearchStorageImpl=204800 maxSegmentSize@clusterSearchStorageImpl=15728640 maxMegeSegmentSize@clusterSearchStorageImpl=12728640`

segmentThreshold is the largest size of a new segment maxSegmentSize is the largest size of a merged segment after which the segment becomes frozen (but still used) maxMegeSegmentSize is the largest size of a merged segment that new segments are added to soakTest causes a new rebuild whole instance command to be posted to the queue when the number pending has reduced to zero.

Also On the admin page you can now turn diagnostics on and off at runtime on the node the page is being served from. The diagnostics appear in the log files.
