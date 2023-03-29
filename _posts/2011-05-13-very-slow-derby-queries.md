---
layout: post
title: 'Very Slow Derby Queries'
description: ""
date: Fri May 13 2011 18:47:08 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/05/13/very-slow-derby-queries/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Here's a problem for anyone reading this.

I have a very slow derby query, and I am looking for alternatives. The query is of the form

select TR.rid from ( select s.rid, ROW_NUMBER() OVER () AS R from ( select distinct a.rid from cn_css a , cn_css a0 where ( a0.cid = ? and a0.v = ? and a0.rid = a.rid ) AND 1 = 1 ) as s ) as TR where TR.R > 0 and TR.R &lt;= 25+0

```

```

The table cn_css contains key value pairs in cid and v, and references row ids rid, (ie columns rid, cid, v) so the inner select should find a distinct set of row ids, potentially sorted (although not in this example). The nest outer query numbers the results and the most outer query selects the first 25 results.

I have a feeling the select distinct is a bad idea as it will sort on disk, but at the moment I cant find an alternative. Still looking, will post back here if I find one.
