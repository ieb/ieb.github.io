---
layout: post
title: 'Automated Testing'
description: ""
date: Tue Jul 14 2009 17:19:32 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/07/14/automated-testing/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
JUnit testing and integration testing is all very well, but being within the same JVM generates some level of synchronization even if effort has been taken to isolate the testers from what is being tested. Frequently there is also a level internal knowledge shared between the tester and the tested, which blurs the API being tested.

With REST based services life becomes easier. Take the work that is being done on Sakai K2, an Apache Sling based application. One developer with a passion for QA, Daniel, is writing perl scripts to exercise the published REST API's from the Java developer team. Being totally disconnected from the Java VM, and building tests to the agreed API, its hard for the Java team to argue with test failures, and there is a certain pleasure in hitting an area of the code base with 10 external threads that you know have a level of randomness that would not be possible with in JVM tests. It surprising the ease with which concurrency issues can be exposed, but better now than in full production. At last count there were about 200 tests giving nearly complete coverage of the code base beyond Sling.
