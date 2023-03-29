---
layout: post
title: 'Zip files without an End-of-central-directory'
description: ""
date: Wed Sep 05 2007 18:01:01 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/05/zip-files-without-an-end-of-central-directory/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
If you create zip files with the ZipOutputStream and forget to close or flush the stream correctly, you may be able to re-open them in Java, but it you try unzip or another command line utility, you will get a cyptic End-of-central-directory missing message.

Looking at the archive with octal dump (eg od -a broken.zip) exposes that fact that the central directory is there at the end.... but its missing a few training bytes. Closing the stream correctly will fix the problem.
