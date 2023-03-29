---
layout: post
title: 'Running Oracle On OSX'
description: ""
date: Fri Oct 12 2007 12:24:30 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/10/12/running-oracle-on-osx/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Being slightly desperate for a test instance of Oracle on OSX I had a brainwave. Run Linux inside Parallels Desktop and run Oracle inside that VM. Since Parallels uses VT and can go direct to Hardware, looks like an option. However to Ubuntu 7.04 running you have to tell parallels your OS is solaris. Something to do with teh vga setup. Aparently line vga=771 also works on boot.
