---
layout: post
title: 'Monitoring SparseMap'
description: ""
date: Fri Feb 24 2012 03:07:36 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/02/24/monitoring-sparsemap/
categories: "Java Management Extensions, NoSQL, Uncategorized"
hero: ../../../defaultHero.jpg
---
Yesterday I started to add monitoring to sparsemap to show what impact client operations were having and to give users some feedback on why/if certain actions were slow. There is now a service StatsService, with an implementation StatsServiceImpl that collects counts and timings for storage layer calls and api calls. Storage layer calls are generally expensive. If SQL storage is used that means a network operation. If a column DB storage layer is used, it may mean a network operation, but its certainly more expensive than not. Storage calls also indicate a failure in the caching. The StatsServiceImpl can also be configured in [OSGi](http://en.wikipedia.org/wiki/OSGi "OSGi") to report the usage of individual Sparse Sessions when the session is logged out. Normally at the end of a request. So using long term application stats should tell a user of SparseMap why certain areas are going slow, what storage operations need attention and if using SQL give the DBA an instant indication of where the SQL needs to be tuned. The short term session stats should enable users of sparsemap to tune their usage to avoid thousands of storage layer calls and eliminate unnecessary API calls. Currently output is to the log file. Soon there will be some [JMX](http://en.wikipedia.org/wiki/Java_Management_Extensions "Java Management Extensions") beans and maybe some form of streamed output of stats. The log output is as follows.

```
app Key Slow Queries, T, N, Q
app Slow Queries, 55, 1, cn:index_update:update cn_css_w set created = ? where rid = ?
app Slow Queries, 121, 1, ac:select:select b from ac_css_b where rid = ?
app Slow Queries, 272, 3, cn:select:select b from cn_css_b where rid = ?
app Slow Queries, 212, 3, cn:update:update cn_css_b set b = ? where rid = ?
app, Key Counters, ncalls, login, loginFailed, logout, slowOp, op, api
app, Counters, 2000, 2000, 0, 2000, 0, 4005, 0
app Key Storage, T, N, OP
app Storage, 2529, 2057, cn:select
app Storage, 1241, 1023, cn:index_update
app Storage, 888, 1004, cn:update
app Storage, 11, 18, cn:insert
app Storage, 21, 32, ac:select
app Storage, 10, 6, au:select
app Storage, 4224, 4001, n/a:validate
app Key Api Call, T, N, M
app Api Call, 11699, 999, org.sakaiproject.nakamura.lite.content.ContentManagerImpl.update
app Api Call, 217, 995, org.sakaiproject.nakamura.lite.accesscontrol.AuthenticatorImpl.signContentToken
app Api Call, 11, 1, org.sakaiproject.nakamura.lite.content.ContentManagerImpl.getInputStream
app Api Call, 691, 6061, org.sakaiproject.nakamura.lite.accesscontrol.AccessControlManagerImpl.signContentToken
app Api Call, 122, 2, org.sakaiproject.nakamura.lite.content.ContentManagerImpl.writeBody
app Api Call, 1250, 5059, org.sakaiproject.nakamura.lite.content.ContentManagerImpl.get
Output is in CSV form in the logs so the logs can be processed later the column headings have the following meaning.
```

T total time in ms N number of times M method OP operation Q query.

OP is parsed as columnFamily:operation so cn:select means a select on the Content columnFamily.

For the DBA the Slow Queries are the ones to watch.

In this instance, at some point during the lifetime of this JVM

select b from ac_css_b where rid = ?

took 121 ms to run but it happend only once. (The laptop hung while performing a Time Machine backup)

This feature will be in version 1.6
