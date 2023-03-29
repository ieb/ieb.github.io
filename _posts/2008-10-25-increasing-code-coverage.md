---
layout: post
title: 'Increasing Code Coverage'
description: ""
date: Sat Oct 25 2008 17:28:58 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/10/25/increasing-code-coverage/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
One of the problems for developers, is that the honest ones want to increase their code coverage and unit tests, but dont really know how much of their code isnt tested. There are solutions to this. You can add a coverage report to maven and build a site, or you can use an eclipse plugin, which is more interactive. <http://www.eclemma.org/> works well inside eclipse and gives good information about the lines being covered. The temptation with this evidence that code is covered or not, is to chase the % coverage up, by devising unreal ways of exercising the code. This should be resisted at all costs, as it will give a false sense of security, but it would be get to the point where the last 5% of coverage is all there is to worry about.
