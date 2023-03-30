---
layout: post
title: 'Given enough Rope'
description: ""
date: Sun Oct 31 2010 18:32:51 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/10/31/given-enough-rope/
categories: "Uncategorized"
hero: ./img/2010-10-searchanalysis1.png
---
A bit of background. We have been experiencing bad performance for certain searches in Jackrabbit using Lucene. I always knew that sorting on terms not in the Jackrabbit Lucene index was a bad thing, but never looked much further than that until now.

The query that was problematic is

```
//*[@sling:resourceType='sakai/user-home'] order by  public/authprofile/basic/elements/lastName/@value
```

ie find all nodes of sling:resourceType = sakai/home and sort the result by a child node. On small sets of searches this appears reasonable, what happens when the numbers scale up, and what happens to alternative queries. Eg no sorting or sorting on a property

```
//*[@sling:resourceType='sakai/user-home']
```

of the target node.

```
//*[@sling:resourceType='sakai/user-home'] order by @lastName
```

So I loaded an instance with upto 6K user-home nodes, and then loaded with 6K non user-home nodes and did some experiments, graph below.

[![](https://ik.imagekit.io/htj4bin8p/2010/10/searchanalysis1.png)

[![](https://ik.imagekit.io/htj4bin8p/2010/10/searchanalysis2.png)

[![](https://ik.imagekit.io/htj4bin8p/2010/10/searchanalysis3.png)

Pretty clear that the search based on child node does not scale at all and is not concurrent. Further investigation reveals that the sort operation has to load the child nodes inside the Lucene scorer direct from the JCR. with ACLs this is about 120K nodes. With > 1K nodes the LRU caches inside Jackrabbit are overloaded and none of the fetches are from cache, which is the underlying cause of the concurrency issue. In JR 2.1.1 the Persistence Manager is synchronized and so loads are sequential in the JVM. 4 threads all have to wait for one another to load the same data from the DB. Why this code was ever sequential I cant quite see, presumably because a non JDBC Persistence manager might need to be synchronized.

All of that aside, don't even think about doing anything in a Jackrabbit search that references anything not on the target node, at even the smallest scale it wont perform, and don't be fooled by a test on 100 items. Anyone who is using Lucene directly will know thats obvious; one of the dangers of a powerful query abstraction. Give a developer enough rope to hang themselves with, and they will.

The solution in this case, publish the sort order property to the node that will be sorted to get it into the index so its value can be used to sort in a simple Lucene Scorer that doesn't access JCR at all.
