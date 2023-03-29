---
layout: post
title: 'Sakai Search working in a cluster again'
description: ""
date: Wed Oct 03 2007 00:57:10 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/10/03/sakai-search-working-in-a-cluster-again/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Not so long ago I realised that Sakai search was corrupting its indexes every month or so due to NFS latencies in propagating changes in the shared segments. I had incorrectly assumed that these latencies might be in the order of 10s max, but this appears not to be the case.

So I have rewritten the indexer stack.

So the Indexer stack in Sakai's search has been re-written into 4 XA transaction managers. The first takes index items from a queue, attaches them to the transaction, and processes the list. The result is a Lucene Segment. This is sent to the shared storage area as a save point as part of the 2 phase commit protocol.

The next transaction in the pipeline is a merge operation that retrieves shared save points and adds them to the local index. The lucene index searcher is reopened in the background.

The third transaction performs a merge and optimization of the save point segments added to the index in the second transaction. Since this will involve reorganization of the index we also post file deletion requests to a delayed queue to ensure that no files are closed while they are still in active use by users. The result of this operation is a local index, built up over time from a sequence of save points.

The final transaction manager performs periodic merges on the central index store, to merge past savepoints into single save points after all active nodes have loaded the later save points. Unlike all the previous transactions that are completely decoupled and run in parallel, this transaction acquires a cluster wide lock on the segments it is merging.

So far in soak tests and unit tests I have not seen failiures of the same form that were previously seen in search in 2.4
