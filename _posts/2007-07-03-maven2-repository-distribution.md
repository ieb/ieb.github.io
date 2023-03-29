---
layout: post
title: 'Maven2 repository distribution'
description: ""
date: Tue Jul 03 2007 01:11:58 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/07/03/maven2-repository-distribution/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
The maven wagon plugin support a greater number of plugins to perform distribution than the standard maven, which is good because doing a maven 2 deploy of a new artifact is a pain. However, webdav support is not quite there. It works just fine (in beta2) to do a deploy to an exising folder in the repo, but when there is no folder structure there, it fails.

I have found that if you webdav mount the destincation locally and then use the file:/// protocol to perform the distribution management, then it all works just fine. It would be nice if the webdav protocol handler for wagon supported mkdir on missing directories.... but the workarround works just fine on OSX.
