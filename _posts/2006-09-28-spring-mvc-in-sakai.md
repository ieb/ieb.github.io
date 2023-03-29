---
layout: post
title: 'Spring MVC in sakai'
description: ""
date: Thu Sep 28 2006 22:26:40 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/09/28/spring-mvc-in-sakai/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
There is an unfortunate side effect of using Spring MVC based apps in Sakai. Sakai has the Springframework libraries in shared, it also has a number of utility classes that make spring MVC much easier, but if those classes are expected to load the selecte view technology, that view technology must also be placed in the shared classloader. As it stands, you cant use the Spring provided VelocityViewResolver as it will pull the Velocity jars into the shared classloader, and break every Velocity app in Sakai.... but you can write your own view resolver which will sit in your own webapp classloader.
