---
layout: post
title: 'Stopping Spotlight'
description: ""
date: Thu Sep 04 2008 12:26:36 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/09/04/stopping-spotlight/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Second in the slow network performance of a backup drive series, yes I cant run unit tests fast enough at the moment, so I am trying to speed my box up and fix all of those things that are broken.

Spotlight.

Who ever said building a search index was cheap. Its not, Spotlight does impact disk performance especially of mounted drives, especially network mounted drives.

Its possible to disable, while running,

```
mdutil -i off /Volumes/ieb_remote
```

and then to delete the contents of the index on that drive.

```
mdutil -E /Volumes/ieb_remote
```

and to see the status of indexing on the drive

```
mdutil -s /Volumes/ieb_remote
```

<http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/mdutil.1.html>
