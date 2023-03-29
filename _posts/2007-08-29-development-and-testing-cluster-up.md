---
layout: post
title: 'Development and Testing cluster up'
description: ""
date: Wed Aug 29 2007 01:30:34 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/08/29/development-and-testing-cluster-up/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
I used to do Sakai cluster testing with multiple tomcat instances on the same box, and share the ports. This is Ok, but when 5 developers try to do the same thing on the same box you soon run out of meaningful port numbers, and a careless killall can bin a few hours worth of testing.

Hence the current interest in virtualisation in this blog. Well the cluster is now up and running, after getting rid of some problems with inconsistent arp responses. Each root partition contains java maven and tomcat and not much else. The source is built on a seperate server in a shared NFS mounted home directory and then with a few simple ssh scripts the cluster nodes are updated automatically from that central location. This makes it much easier to restart the cluster and redeploy or reconfigure the cluster. Shared filesystem for content and search is provided by a NFS file system, and the MySQL instance runs on the same central box. This is probably nothing like a production environment, but the aims are slightly different as the update cycle needs the same as for a single node developer environment. So far its working well, virtualisation is providing good separation between the cluster nodes, making good use of the resources and its easy to manage the root images on LVM with scripts. Recreating a new node now only takes a few minutes.

I havent tried yet, but I suspect the kernel and / filesystem required to bring java / tomcat up is very small.
