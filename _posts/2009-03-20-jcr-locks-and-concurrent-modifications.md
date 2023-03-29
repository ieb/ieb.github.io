---
layout: post
title: 'JCR Locks and Concurrent Modifications'
description: ""
date: Fri Mar 20 2009 00:56:27 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/03/20/jcr-locks/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Heavy concurrent modification of a single node in Jackrabbit will result in InvalidItemStateException even with a transaction. The solution is to lock the node, the code below performs a database like lock on the node, timing out after 30s if no lock was obtained. The lock needs to be unlocked as its a cluster wide lock on the node.

I suspect however that the propagation rate will not be fast enough to maintain consistency over a cluster, but then again... nothing will be fast enough without impacting performance. The slightly annoying feature of this is that you **must** perform locking manually. This is IMVHO a bit crazy since at some point if you don't and you write to the node, you will get an exception, and if you are in a transaction (as you should be) you wont be able to recover the exception since it will require rollback and a complete redo of the whole transaction.

```
  public Lock getNodeLock(Node node) throws UnsupportedRepositoryOperationException,
      LockException, AccessDeniedException, RepositoryException {
    Lock lock = null;
    try {
      lock = node.getLock();
      if (lock.getLockToken() != null) {
        return lock;
      }
    } catch (LockException e) {
    }
    lock = null;
    long sleepTime = 100;
    int tries = 0;
    while (tries++ < 300 ) {
      try {
        return node.lock(true, false);
      } catch (Exception ex) {
        if ( sleepTime < 500 ) {
          sleepTime = sleepTime + 10;
        }
        try {
          if ( tries%100 == 0 ) {
            System.err.println(Thread.currentThread() + " Waiting for "+sleepTime+" ms "+tries);
          }
          Thread.sleep(sleepTime);
        } catch (InterruptedException e) {
        }
      }
    }
    throw new Error("Failed to lock node ");
  }
```
