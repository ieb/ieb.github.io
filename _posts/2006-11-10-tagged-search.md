---
layout: post
title: 'Tagged Search'
description: ""
date: Fri Nov 10 2006 00:52:11 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/11/10/tagged-search/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
New feature for search, Tagged words of the search terms in a search results.

1\. Take all the term vectors from Documents in a search result. 2. Merge the term vectors. 3. Take the top 100 4. Sort alphabetically. 5. CSS format the word sizes using a normalized frequency 6. Output the results.

The only problem that I can see at the moment, is that the Stemming algorithm (look and looking are equivalent terms) used means that terms can look a little odd. There probably isnt a way to un-stem. :(
