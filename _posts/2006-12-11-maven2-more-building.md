---
layout: post
title: 'Maven2 more..... building'
description: ""
date: Mon Dec 11 2006 00:18:56 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/12/11/maven2-more-building/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I've now got it all building including osp, sam, sections, gradebook (after a break going to the Mall, went into the Apple store, looked and looked and looked, but walked out empty handed.... maybe nothing is quite as tempting as it used to be, but I did see some iPod games, I wonder when Apple will release the dev kit... if ever) sorry... yes its building now. Next problem is which deployer to use.

Most of the Tomcat deployers try to be to cleaver and integrate with the running tomcat runner, when all we really want is something on the filesystem. I've had a long hard look at Cargo for maven2, but it doesnt work... cargo:package and cargo:install don't work and I don't really want to have a deploy to a running tomcat so cargo:start is out of the question.

The pluto deployer looks promising, and the existing plugin that I have already does unpack, so there is a chance that either of these will do.

Naturally there is some confusion with deploy to a repository (which part of M2 ontology) and deploy to tomcat.

Atlanta is really quite now, no more Poker BOF's, Aerodynamics BOF's from the 49th floor.....

there is a confluence page tracking this, where I will upload the poms, pending getting commit. (http://bugs.sakaiproject.org/confluence/display/~ianeboston/Maven2+Migration+Work)
