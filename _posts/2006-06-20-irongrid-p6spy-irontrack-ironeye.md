---
layout: post
title: 'IronGrid, P6Spy, IronTrack, IronEye'
description: ""
date: Tue Jun 20 2006 11:14:08 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/20/irongrid-p6spy-irontrack-ironeye/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Picking up an old Hibernate book, flicking to the back, I noticed IronTrack. I remember this from back in 2003, but never used it. When you start searching for IronGrid in Google, it looks like they don't exist any more, a pity since it looked like a good way of seeing what a DB was doing. There are commercial products that do the same, but this was supposed to be OpenSource. However their is talk of a Trial License, which a new model to me, open source, but if you want the binaries, you need a license, strange. Perhaps thats why they don't exist any more.

However, there is a Sourceforge project, with 2 developers, no released files and no activity and no stated license. Digging a little deeper, the code is in CVS. It appears to be Apache 1.1 licensed, and the Licensing code has been commented out. For posterity, I've built the jars and uploaded [binaries](/downloads/irongrid.bin.tgz) and [source](/downloads/irongrid.src.tgz). You can run the binary with java -jar irontracksql.jar or java -jar ironeyesql.jar
