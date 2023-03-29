---
layout: post
title: 'Spring Proxes that Dont appear to quite work.'
description: ""
date: Wed Dec 12 2007 23:22:44 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/12/13/spring-proxes-that-dont-appear-to-quite-work/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Spring Auto Proxies take the hassle out of AOP, but they dont always work. The situation. I have an implementation in a classloader (component classloader) that cant be seen by the classloader that spring lives in (shared classloader). The Service API to the implementation is in the shared classloader. So I can create an Auto Proxy on the Service API and all is Ok. But then there are some configuration settings in the implementation, expressed as getters and setters, that are not present in the API. So in Sakai, sakai.properties does this all over the place with a method@springID where springID is traditionally the API id.

Unfortunately Auto Proxies cant proxy the impl without being able to see it, so they don't work. Now you could re implement the Auto Proxy and put it in the same classloader as the impl, and then all would be cool, or you could do some AOP in the impl and not bother with the Auto Proxy... but thats not quite as easy as an auto proxy.

Naturally the danger appears when you think you have proxied the impl, and something deep in the code binds to the impl via reflection... but you have only proxied the API.

So.... dont bind to implementations at all... ever.... especially not via reflective methods... or casting... it will catch you out eventually. Unfortunately there is a lot of code out there that has made the assumption that it lives in single classloader..... and binds internally to its impls.... you have been warned :)
