---
layout: post
title: 'In Tomcat Unit Testing'
description: ""
date: Thu Sep 07 2006 23:32:26 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/09/07/in-tomcat-unit-testing/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Although the Test Harness is great and enables Unit tests to work for components, there is a 'dirty hackers' alternative.

Write a class that operates as a unit test, inject it into Spring, start the test in the init method, and call you pack project 0000-sakai-myproject-pack

Your project will load first and then execute your unit test, pulling in all the necessary dependencies. It may not have the full JUnit environment, but it will test your code.

Just remember to turn the test bean off in production :)
