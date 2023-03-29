---
layout: post
title: 'Xerces and Classloaders'
description: ""
date: Wed Feb 18 2009 00:31:39 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/02/18/xerces-and-classloaders/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
It can be hard to work out what happens with Xerces and classloaders. Its a common cause of ClassCastExceptions. Often cause by the the java class loading one class from some parent classloader and then the ParserFactories loading from the context classloader, the result is a ClassCastException even though the classes are the same.

There are some tricks that can help -Djaxp.debug=1 will get xerces to print out messages telling where the classes were loaded from, which will give you some idea if things are going correctly.

In the case of K2, because we manage the classloaders, Unit test harnesses will load the unit test classes inside the base classloader, whereas the context classloader may be the component classloader that is current when the parsers are invoked.

I think there are 2 ways in which this could be addressed. We could create an isolated classloader that is used for running test, so that classes in the test are loaded into a component classloader.

Or we could allow developers to specifiy if a jar is ignore by the compnent managers for the purposes of running tests.

The former is more correct, the latter is easier, no decision at the moment, but I need to try both approaches.
