---
layout: post
title: 'Installing git on OSX Tiger to work with SVN.'
description: ""
date: Wed May 07 2008 22:19:03 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/05/07/installing-git-on-osx-tiger-to-work-with-svn/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
First off, no dmg available for Tiger, so you need to build from source.

Building Git from source is easy on OSX, just download one of the tarballs from linux.org, configure make install, but getting it to work with SVN is not quite so easy because by default it binds to the OSX perl which may or may not have Alien::SVN

MacPorts appears to work: sudo port install git-core +svn
