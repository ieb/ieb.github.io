---
layout: post
title: 'Impact of Locks in a cluster'
description: ""
date: Fri Mar 20 2009 10:45:35 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/03/20/impact-of-locks-in-a-cluster/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I thought JCR locking was a potential solution, but there are some issues. With Jackrabbit, each lock generates a journal entry, and it looks like there might be some journal activity generated with attempting to get a lock.

Using the locking mechanism in the previous post. I have one update to a property on one node. Performed 200 times, by ten threads concurrently. That leads to 19K journal updates. If I unwind the threads and the operations into loops performing the work sequentially for the 2000 operations I get about 4000 journal entries. Which means that locking multiplies the number of database operations in Jackrabbit by about 4x under load. Since these are write operations and they need to be replayed on all application server nodes in a cluster that might not be acceptable.

There are 2 other approaches to this problem. Accept that the exception can happen, and handle it in the same way you would a optimistic lock failure, or create a RDBMS lock scheme.

The optimistic lock failure recovery has complications since it requires perfect transactional isolation in the application code.

The RDBMS locking table might work provided the root persisted node can be identified. It may also be possible to implement this with a cluster replicated cache avoiding any DB overhead.
