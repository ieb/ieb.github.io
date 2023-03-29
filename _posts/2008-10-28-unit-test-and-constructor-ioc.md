---
layout: post
title: 'Unit Test and Constructor IoC'
description: ""
date: Tue Oct 28 2008 12:30:26 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/10/28/unit-test-and-constructor-ioc/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I might have said it before but, Constructor IoC has 2 big advantages over setter and getters.

1. The IoC all happens in one shot, so there are no issues about a class being half configured, its always thread safe from the start.
2. When doing writing Unit tests is really clear what is needed to make a class function
3. Less code.

That was 3... oops... bloat :)
