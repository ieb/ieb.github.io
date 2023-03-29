---
layout: post
title: 'Content Hosting JSR-170 with Jackrabbit Continued....'
description: ""
date: Wed Aug 30 2006 10:24:44 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/08/30/content-hosting-jsr-170-with-jackrabbit-continued/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
So the CHS based on Jackrabbit is largely written and working. It can be found in Sakai contrib (https://source.sakaiproject.org/contrib/tfd/trunk). Surprisingly it works! After a few hiccups with node types and getting the Sakai representation of additional properties into the JCR node structure, it all works. I think I've only had to fix about 3 bugs so far, mainly where /'s were not put into Id's.

It does need more testing and there are some startup issues to be sorted, as Im only running against HSQLDB at the moment. I'd also like to see if we cant get the Jackrabbit DAV Servlet working as Sakai DAV.... there are some concerns about compliance with this.
