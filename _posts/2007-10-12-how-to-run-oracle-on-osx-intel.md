---
layout: post
title: 'How to run Oracle on OSX Intel'
description: ""
date: Fri Oct 12 2007 16:58:40 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/10/12/how-to-run-oracle-on-osx-intel/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
You cant, well not on OSX. But you can bring up a Parallels desktop, install debian etch from the network iso make certain you give it 1G of swap to keep oracle happy, dont add any extra packages and then edit /etc/apt/sources.list

```
deb http://debian.virginmedia.com/ etch contrib main

deb http://security.debian.org/ etch/updates main contrib
deb-src http://security.debian.org/ etch/updates main contrib

deb http://oss.oracle.com/debian unstable main non-free
```

to include the oracle oss

then you do a

```
wget http://oss.oracle.com/el4/RPM-GPG-KEY-oracle  -O- | sudo apt-key add -
apt-get update
apt-get install oracle-xe
```

Once that is all done, and you have been through the oracle db configure step, you should apt-get install ssh so that you can create a TCP tunnel to localhost:8080 from you OSX box. That done you can expose the http://localhost:8080/apex url on your OSX box, login to the Oracle XE web interface and configure.

The nice thing about this is, if you keep the kernel small, its almost like running oracle as a native app in OSX. I did try with Ubuntu, but it was far to clever and made a huge mess of the VGA console and would only run with X enabled.... not very lightweight.
