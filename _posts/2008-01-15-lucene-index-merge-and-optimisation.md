---
layout: post
title: 'Lucene Index Merge and Optimisation'
description: ""
date: Tue Jan 15 2008 11:34:31 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/01/15/luciene-index-merge-and-optimisation/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Lucene index merge has some parameters that effect how the index is built. This has an impact on the index operations other than search. The MergeFactor controls how many documents are stored within each segment before a new one is started and how many are started before they are collected into a larger one. So a Factor of 10 means, 10 documents before aggregating and 10 aggregated indexes of a certain size before aggregating again. Consequently MergeFactor controls the number of open files.

The higher the merge factor the faster the index build as merging of segments is less frequent. However this causes a significant slow down in the speed which an index can be added to an existing one as this appears to depend on the number of files lucene has to open.

The next one is the MaxBufferedDocs parameter which controls the number of documents to buffer in memory before flushing to disk. For a batch index operation the higher this is the higher the index performance but the more memory will be consumed.

And then there is a MaxMergeDocs which limits the maximum number of documents within a segment above which merging does not happen. This is used to limit the files size, so that no file is over 2G on a 32bit system.

In running the Sakai search indexer operations I have noticed some things in this area

- Once there are about 50 index directories in a merged index, merging takes 2s per merge. Performing an optimize on the index restores the addDirectory operation to 20ms or less. It makes sense to optimize and index when there are more than 50 directories in the index.
- When performing an merge and optimize of a set of indexes, the optimize step can take a lot of time. (minutes). However I have observed that if the index directories are added to an empty index, in the sequence that they were created, the optimize operation is much faster. This may be because the aggregation steps are simpler. This is only an observation.
-
