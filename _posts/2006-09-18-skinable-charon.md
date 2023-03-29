---
layout: post
title: 'Skinable Charon'
description: ""
date: Mon Sep 18 2006 18:17:58 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/09/18/skinable-charon/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
After becoming closely acquainted with with Charon at integration week, (thats the current Sakai portal and not a typo :) ... more's the pity ), I've had a look at making it a bit more skinnable. After a quick round of templating engines, and considering string properties for good measure, I notices that some including velocity allowed you to render without binding dependencies. So I've extracted all the inline html from Charon, created vm templates and put the Velocity binding behind an API. It should now be possible to have per site portal templates that go beyond what can be done with css... and plug in any other templating engine.

A nice side effect is that it was possible to write a unit test case that would render all the templates and validate them for accessibility.

Since we are after a code freeze, this is not going into trunk and 2.3.
