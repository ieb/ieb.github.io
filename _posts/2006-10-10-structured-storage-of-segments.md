---
layout: post
title: 'Structured Storage of Segments'
description: ""
date: Tue Oct 10 2006 11:50:49 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/10/10/structured-storage-of-segments/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
When the size of the index gets big there are some problem that I thought wouldn't appear. A 500G index, of 1G segments is going to have at least 500 files in the local segments space and in the shared segments space, at this size I would hope on the file system.

500 files in a directory might be Ok in ext3 on local disk, but on AFS/NFS/SMB NAS file system its likely to cause problems.

The solution, hash the file system. Just like is done with your local firefox web cache and all sorts of other systems. In the latest version of search from trunk there is a first level hash that will limit the number of files in the base directory to 100. This can be turned on on both the shared segment store and local segment store, but it must be the same on all nodes. When the search service starts up it automatically reconfigures the store to match the segmentation scheme that is being used.
