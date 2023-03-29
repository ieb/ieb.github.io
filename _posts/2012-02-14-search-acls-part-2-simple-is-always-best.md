---
layout: post
title: 'Search ACLs Part 2: Simple is always best'
description: ""
date: Tue Feb 14 2012 05:53:29 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/02/14/search-acls-part-2-simple-is-always-best/
categories: "Access control list, Bloom filter, Solr, Uncategorized"
hero: ../../../defaultHero.jpg
---
I can't take any credit for what I say next, all that goes to Mark Triggs who I spent some time chatting with last week. Simple is always best, and although a Bloom filter might be the CS way of solving membership resolution, its not the way to do it in an inverted index where we are really looking for the intersection between two sets. We already have lists of principals that can read each document associated with each document as a multivalued key word. This list is created by analysing the fully resolved ACL for each content item at the point of indexing. In general, content items dont have crazy numbers of ACLs so although the number of unique sets of read principals may be high, the number of read principals is not crazy high, so in that form cardinality etc are not overloaded.

The problem we encounter is that the simple query causes many query operations inside Solr so as the number of principals a user has rises the time taken for each of their queries also increases, into seconds. Not exactly much hope of web scale with that, and eventually the number of terms is too great for the Solr query parser, although by then I would expect the query to be taking minutes.

The solution, like all good things, is simple. Encode the read principals as a parseable token in the query (eg comma separated) and then use a custom query component compiles and caches a bitmap for the read principals, which are sorted. That part of the operation can be slow, for 1M documents, 100 readers per document, 10,000 possible readers if a user has 1000 principals Mark reports it taks order 250ms to build the bitmap first time from about 10 segments. Segments are immutable so as the current segment changes only parts of the bitmap need to be rebuilt. With 2M documents, 2000 principals per user it takes about 600ms to build the bitmap, again each segment is taking order 10ms to build the bitmap dependent on the size of the segment.

Once the bitmap is built and cached, subsequent queries are dominated by the other terms in the query. This looks like a solution that can be retrofitted to the existing index and should not require excessive load cache space or additional load, providing we cache with a key of segment/sorted-list-of-principals and are able to invalidate segment bitmaps as the segments get updated. In our case there are 2 classes of principal list. The anon user and logged in users. If we include the userID of the logged in user then we will probably get one cached bitmap per user. If we look for patterns in the lists of principals we can share the bitmaps more widely.

Mark can be found at <http://dishevelled.net/>, and the code at <http://dishevelled.net/MarkQueryComponent.txt>
