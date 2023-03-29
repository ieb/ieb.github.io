---
layout: post
title: 'Is ORM So bad?'
description: ""
date: Wed Jun 13 2012 00:27:15 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/06/12/is-orm-so-bad/
categories: "Django, hibernate, Object-relational mapping, ORM, Uncategorized"
hero: ../../../defaultHero.jpg
---
ORM gets a bad name, and most of the time it deserves a bad name. It produces nasty horrible queries that don't scale and lead to dog slow applications in production. Well that's not entirely fair. Programmers who write code or SQL and never bother to check if they have made stupid mistakes lead to dog slow applications in production. The problem with ORM is it puts lots of power into a programmers hands, lets them loose and makes them think that they can get away without thinking about what will happen when their application has more than 10 rows in a table. There is no magic to ORM, just like raw SQL, you have to tune it.

This is not rocket science. Load the tables you are making a query against with a representative number of records, run the query and then tune the query again, and again, and again. Then run the query concurrently, then run the query with updates concurrently. And tune, tune, tune. To do that, you have to read the manual on how to tune your chosen ORM in exactly the same way you will have read the tuning manual for your chosen RDBMS. There is hardly any difference between tuning raw SQL and tuning ORM generated queries.

Where ORMs differ, get a very bad name, and make many give up a code SQL directly, is how hard or easy they make it for you to both tune the query and make the query deliver precisely the results required. The bad ORMs (no naming and shaming here), make that painfully impossible. The good ORMs firstly generate queries that by and large can only be bettered by the best DBA, and if they occasionally fail, those ORMs are easy to tweak.

If your thinking it would be easier to use some other query mechanism you will probably have to invest just as much time and effort tuning either code, update strategies or some other query language. There are really no magic bullets when it comes to making queries against large data sets go fast, unless your problem is trivial and pointer based.

## So how do I tune ORM (or raw SQL for that matter) ?

There is little point in spending hours squezing the last ms out of every query. It's the worst queries that need attention first. One approach I use on DjOAE, an app using Django ORM is to set some parameters, eg: GET requests must take less than 10ms and perform no more than 10 SQL operations; POST request may take upto 50ms and 30 SQL operations. If any request breaches those limits all the raw SQL with timing information is dumped (preferably painted red). With the database suitable constrained to make it work (ie made very small, with almost no cache so anything that isn't a lookup runs like a dog), and loaded with representative data any operation that needs tuning sticks out like a sore thumb. When I don't see any more, I drop the thresholds, up the concurrency, raise the data set size.

Once you have the detailed evidence, it's as easy as falling off a log, and way more satisfying. You could probably do the same with any ORM, even Hibernate.

## What about caching query sets in the app ?

Caching should really be turned off for tuning. An application that can't work without caching at the query layer will generally not scale as at some point the cache will suffer too much contention/invalidation/replication (gulp, no not replication, you must be kidding) and the underlying slow queries will be exposed. Where caching is worth it, is where the query is already fast, but repeated billions of times. If your using caching as a query tuning strategy, that's fine, bit it will bite you in the end.
