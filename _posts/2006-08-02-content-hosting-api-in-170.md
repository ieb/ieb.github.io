---
layout: post
title: 'Content Hosting API in 170'
description: ""
date: Wed Aug 02 2006 21:22:51 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/08/02/content-hosting-api-in-170/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Almost there, One thing that I dont know if its a good idea or not, but the Groups attributes associated with entities inside content hosting are stored in content hosting. So if you want to let Content Hosting manage its security underneath, by talking to AuthZGroups, then you have to stop it asking itself.

'Is it ok to look at this node to find out if I can look at this node to find out if I can look at this node to find out if I can look at this node to find out if I can look at this node....'

Fortunately there is a thing called a Security Advisor which can be used to remove security constraints below a certain point in the request cycle. Its also a really good way to make the whole thing go much faster and remove the load on the AuthZGroups resolution.
