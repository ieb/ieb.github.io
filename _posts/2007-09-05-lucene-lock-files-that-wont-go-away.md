---
layout: post
title: 'Lucene lock files that wont go away'
description: ""
date: Wed Sep 05 2007 18:07:55 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/05/lucen-lock-files-that-wont-go-away/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
As part of the search testing, I've been running a large number of threads operating on lucene segments. It all works fine for about 45 minutes and then I start seeing messages like

```
Caused by: java.io.IOException:
    Lock obtain timed out:
    Lock@/tmp/lucene-8b98f884942d60a1ef42e1098e14f204-commit.lock
         at org.apache.lucene.store.Lock.obtain(Lock.java:58)
         at org.apache.lucene.store.Lock$With.run(Lock.java:108)
```

Which prevents the index from opening for both reading and writing. Looking in the /tmp directory, there are 100's of lucene-\*.lock files.I believe that the GUID is based on the canonical path (looks like sha1) to the segment on disk, and if you forget to close the index, the lock will remain. So if your segments have fixed names, and your program crashes, then you will be left with lock files, and some time later you will not be able to open those segments.You could delete the lock files on startup, but that would be dangerous. If you manage the indexes in your own code, then using a shutdown hook and a register of active indexes will ensure that the indexes are all closed.

eg

```
Runtime.getRuntime().addShutdownHook(new Thread() {
    /* (non-Javadoc)
     * @see java.lang.Thread#run()
     */
   @Override
   public void run()
   {
      try
      {
         multiReader.close();
      }
      catch ( Exception ex )
      {
      }
    }
});
```

My test now runs forever :)
