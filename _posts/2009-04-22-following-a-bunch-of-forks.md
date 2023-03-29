---
layout: post
title: 'Following a bunch of forks.'
description: ""
date: Wed Apr 22 2009 18:37:39 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/04/22/following-a-bunch-of-forks/
categories: "Uncategorized"
hero: ./img/2009-04-picture-2.png
---
Can start to be a pain, this fetches things a bit faster for review.

```
x43543-2:osgikernel ieb$ git branch -a
* master
  carl/master
  codders/master
  danatcaret/master
  daniel/master
  holdorph/master
  jholtzman/master
  origin/master
  stuartf/integration
  stuartf/master
x43543-2:osgikernel ieb$ for i in `git branch -a | grep '/master' | grep -v origin | cut -f1 -d'/'`; do git fetch $i; done
x43543-2:osgikernel ieb$ gitk -all
```

Which looks like this:

![Tracking branches in GitK](./img/2009-04-picture-2.png "Gitk branches")
