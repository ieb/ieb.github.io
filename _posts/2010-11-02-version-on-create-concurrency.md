---
layout: post
title: 'Version on Create Concurrency'
description: ""
date: Tue Nov 02 2010 16:50:52 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/11/02/version-on-create-concurrency/
categories: "Uncategorized"
hero: ./img/2010-11-screen-shot-2010-11-02-at-16-33-25.png
---
In Jackrabbit 2.1.1 (possibly fixed in later version) if you create nodes with mix:versionable added to them, the version history will be created which will block other threads performing writes and Persistence manager level reads. If the persistence manager is a JDBC based persistence manager and other threads are attempting to find items that are not in the shared cache, reads will be also be blocked, as they need to access the database by reading. Remember the PM is a singled threaded transaction monitor in JR 2.1.1 and earlier. So creating an item with mix:versionable where many concurrent requests are performing the operation results in a thread trace as below (red == blocked threads).

[![](/img/2010/11/screen-shot-2010-11-02-at-16-33-25.png)

Removing the mix:versionable, appears to remove almost all thread blocking as below. It may not look like it but in the case below there are more concurrent request running than in the example above, the time per request is significantly less.

[![](/img/2010/11/screen-shot-2010-11-02-at-16-34-05.png)

So add mix:versionable only when you need to add it at the point of checkin.
