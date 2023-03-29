---
layout: post
title: 'Sakai Search Update'
description: ""
date: Sun Jul 16 2006 11:15:27 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/07/16/sakai-search-update/
categories: "Search, Thought, Tools"
hero: ../../../defaultHero.jpg
---
I have been doing quite a bit of work recently improving the performance and operation of the search indexer in Sakai. Problems have been mainly around using Hibernate in long running transactions. It is so unpredictable in how it touches the database, it means that long running transactions will lock large areas of the database... which causes other threads, connected to users requests to randomly exhibit stale object, optimistic locking and lock timeout failures. This is only made worse in MySQL where the lock is placed on the primary key index, which means that neighboring records are also locked (if they don't exist).

So the search index builder has not been running continuously inside Sakai for 48 hours building a 4GB index.

There are still some issues outstanding to be aware of. 1. PDF documents that contain a lot of drawing instruction. I have have some particularly bad examples of PDF documents that take several minutes to load in Preview or Acrobat. This is due to a huge number of drawing instructions in the PDF. When search encounters one of these documents under extremely heavy load, I have seen it take 10 minutes to process the document as it has to layout all the drawing instruction. This is rare occurance, and occasionally will make the search indexer believe that the indexer thread has died, and so it will remove the lock.

If this happens the work don't by the first thread will be lost, and a new thread will take over the work. The first thread will die gracefully, but It may cause a slowdown in the rate of indexing.

If for any reason a PDF document takes > 15 minutes to read, then it will block the indexing queue and you will have to remove that document or improve its encoding. I am thinking about ways of eliminating this problem.

2\. After time the number of segments in the indexer increases. New segment builds are merged into the current segment. At the moment, old segments are not merged. This means that if the site is continuously rebuild, the number of segments will increase and the disk space will be consumed.

In addition each update will cause DB space to be consumed in the form of redo logs although only the current version of the segment is maintained.

At somepoint I need to write a class to perform merging of segments, that can, as part of the index build do a complete merge operation and reduce the number of segments.
