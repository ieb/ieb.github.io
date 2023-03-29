---
layout: post
title: 'JCR SQL Queries'
description: ""
date: Thu Feb 05 2009 17:26:43 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/02/05/jcr-sql-queries/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Care needs to be taken

```
SELECT *  FROM nt:base  WHERE jcr:path LIKE '/userenv/%'
```

works, but

```
SELECT *  FROM nt:base  WHERE jcr:path LIKE '/userenv%'
```

does not.
