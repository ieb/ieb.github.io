---
layout: post
title: 'Cambridge OAE: Accept Terms and Conditions Widget.'
description: ""
date: Mon Aug 15 2011 15:42:34 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/08/15/cambridge-oae-accept-terms-and-conditions-widget/
categories: "Uncategorized"
hero: ./img/2011-08-screen-shot-2011-08-15-at-15-38-41.png
---
For the University of Cambridge OAE instance we have an "Accept Terms and Conditions Widget". This is loaded as a widget on all pages and checks that the user has accepted the current terms and conditions. I they have not, it pulls their official identity from the institutional LDAP, and asks them a) do you accept the terms and conditions and b) are these the details that should be used. The wording of the terms and conditions is being reviewed by the lawyers at the moment, and can be internationalized as required. Development took about 4 hours, start to end and it uses most of the Sakai Widgets API. There is one small patch to the core code base to ensure that a div appears on every page to load the widget. Code is in the Cambridge OAE extension repositories https://github.com/ieb/ucamux , https://github.com/ieb/ucamex and is deployed as separate jars into instance.

[![](/img/2011-08-screen-shot-2011-08-15-at-15-38-41.png "Screen shot 2011-08-15 at 15.38.41")](/img/2011/08/screen-shot-2011-08-15-at-15-38-41.png))

[![](/img/2011-08-screen-shot-2011-08-15-at-15-38-53.png "Screen shot 2011-08-15 at 15.38.53")](/img/2011/08/screen-shot-2011-08-15-at-15-38-53.png))
