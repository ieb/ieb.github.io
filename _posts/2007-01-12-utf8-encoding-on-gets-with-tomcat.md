---
layout: post
title: 'UTF-8 Encoding on Gets with tomcat.'
description: ""
date: Fri Jan 12 2007 18:35:09 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/01/12/utf-8-encoding-on-gets-with-tomcat-3/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Looks like browsers dont UTF encode Gets correctly, or at least that whats observed. Take a form, make it a GET and put some UTF-chars in ... eg 中国的网页

Then when it gets to the server ( in this case tomcat it comes out badly coded).

If you change the GET to a POST, encoding works Ok. It could be a tomcat issue assuming the get url is something it inst or it could be something more fundamental. It looks like it happens even when the URL is URL encoded.
