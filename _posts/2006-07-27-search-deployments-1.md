---
layout: post
title: 'Search Deployments 1'
description: ""
date: Thu Jul 27 2006 09:38:12 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/07/27/search-deployments-1/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
It looks like there are a number of sites actively deploying Sakai Search in production. Thankfully the stream of requests for fixes has been relatively low volume, so I did something right.

There were 2 main areas where production teams found issues. Firstly its clear that Hibernate/Spring is next to hopeless when it comes to long running transactions in multiple threads managed by Spring transaction proxies. Its not that Hibernate and Spring are bad, in fact they are excelent, but they are not so good away from the request cycle.

What has been observed is that is there is a background thread, such as a queue processor, contending with a foreground request thread, the queue adder, then the transaction policy on the back ground thread has to be tightly controlled to ensure that number of rows it maintains locks over is minimized. Without this, either thread may wait for a lock timeout, Ok for the background thread, bad for the request thread.

If you manage to do that, you will still get some lock contention in a high load environment, so what happens when you do. The application should behave in a sane and predictable way. And this is where hibernate starts to come unstuck. Since you don't have precise control over what statements are issued to the database and when, you quickly find that the batch update of Hibernate is mildly uncontrollable, and so you spend a lot of time trying to predict and recover from these failures safely.

So, I recoded the Queue processor to use pure JDBC, and found control was regained. No more failures, I know exactly which records are locked, and I can recover sensibly. I still use Hibernate to build the schema and in other areas. In fact having started out with a hibernate implementation, recoding in JDBC was easy since there was a good structure there.
