---
layout: post
title: 'Search Deployments 2'
description: ""
date: Thu Jul 27 2006 09:51:02 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/07/27/search-deployments-2/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
The Second problem that has been found in Search in production is that the number of index segments grows.

As the index is updated, new search documents are added to new segments that are merged into the current segment. When the size of the segment reaches a certain size, it is retired and a new segment is started. Retired segments are still active, they just don't have any new documents added to them. This is relatively normal behavior, Nutch does something similar, with more sophistication.

The problem that was happening at one production site, what that they had a reasonable number of documents, and they had rebuilt the entire index several times. Hence the created a fairly large number of segments. Eventually the JVM said 'too many files open'.

It turns out that a small bit of code that was ensuring the SearchIndex reload was atomic was leaving file handles in memory waiting for the GC to close them. So I fixed that stupid mistake. But it also made me think about what does happen to a huge index. I've done testes with 200 segments with no problems, but as the corpus grows there must come a point where there are just too many files.

So I also implemented a segment merging algorithm. This merges segments together on an order of magnitude algorithm. At the end of each search operation, the index builder (which has cluster wide lock), sorts the segments into size an based on the first segment tries to merge 10 other segments within the same order of magnitude, it then looks for the next order of magnitude and tries to do the same. It ignores the current segment, as we want that one to be small and fast.

This works well, it creates a log base 10 structure to the segments greatly reducing the number of segments present. The downside is that when a merge happens it is potentially a large event. Imagine when the larges segments are in the 1G range, and 10G merge might take a bit of time, even if the infrastructure can support > 2G files.

At the end of that, bar some minor UI bugs, search is up in production at least one, non Cambridge site. Cambridge are naturally going be deploying Search on all 3 of their sites.
