---
layout: post
title: 'Where Maven 2 parent resolution breaks.'
description: ""
date: Sun Dec 17 2006 20:10:34 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/12/17/where-maven-2-parent-resolution-breaks/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
There is a subtlety in the way in which maven 2 parent resolution breaks. If you have a project that has a parent that needs to be built, the dependency tree does not take into account parent poms when performing the build. You have to explicitly list the parent as a module to make it build and be part of the tree.

We'll thats not exactly true, what actually happens or appears to happen, is that if the pom in question is not in the local repository and has a relative path stated, it is added to the dependency tree without a version... and things resolve to it, then when it is built it goes into the cache without a version, so that when other projects try and get it out the cache, they cant... resulting in a project that doesn't exist locally (because it has come out the cache) and cant be cloned (because the version doesn't match) and so it doesn't exist (sort of catch 22). The solution appers to be to put then parent poms into the module dependency tree, then they get built first and put into the local repository with a version, and appear in the cache correctly.... or at least thats what appears to work... very confusing.
