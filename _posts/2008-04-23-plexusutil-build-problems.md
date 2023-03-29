---
layout: post
title: 'plexus-util build problems'
description: ""
date: Wed Apr 23 2008 16:01:07 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/04/23/plexus-util-build-problems/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Looks like there are some dependency issues with building maven plugins. Plexus Utils 1.1 appears to be at fault, with messages such as NoSuchRealmException. If you get this, try upgrading the maven api to 2.0.6 or later in your plugin build. Worked for me.
