---
layout: post
title: 'Hosting Darwin'
description: ""
date: Fri Oct 20 2006 18:45:52 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/10/20/hosting-darwin/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
A few months ago, Caret offered hosting space to Darwin online a Cambridge University Project. We didnt write any of the code, that work was done by Antranig Basman who works at Caret part time.

This Wednesday we found out that the BBC was interested in interviewing the project lead, which they did. On Thursday morning the site went live. The BBC broadcast items on Breakfast Radio and TV news and a number other channels and within 4 hours we had seen 2M hits on the site. At then end of the day I think we saw 4M hits and today, Friday, I think there have been another 4M hits. This probably is that big a site, but we were expecting about 500,000 hits in the first day, so there was quite a bit of on the fly load testing as it ramped up. Credits must go to Daniel Parry and Sultan Kus for tuning the deployment on the fly and monitoring the infrastructure and for Antranig, for developing something that didn't crash in the first few hours.

What we learn't..... 80% of the visit started from people typing in the URL, not from search engines or referrers, 10% were from slashdot.... traditional media channels are alive and well, at least in the Uk.

We should have load tested a bit harder and deployed on hardware matched to the load.... we should have predicted the load better as well.

Its much easier to load an application up with a few 100,000 users all wanting to get to the information, than it is to use a load tester.... everyone a few 100,000 willing users, don't they.
