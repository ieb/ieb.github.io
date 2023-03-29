---
layout: post
title: 'MySQL Cluster'
description: ""
date: Fri Nov 03 2006 18:49:13 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/11/03/mysql-cluster/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
We have been having fun with a mysql cluster,

go the Linux-HA bit up without to many real problems and the Apache failover works fine. But clustering MySQL is not that easy. Master/Slave replication works and will failover, but because of the log offsets is quite hard work getting it to fail back correctly. It certainly cant do the merry ping pong that you can do with Apache.

We could use a SAN, but that would be defeatist. So DRBD, a network mirror. You might think it was too slow, but having Done some Bonnie++ tests on it it gives close to native speed for reads. And it mirrors to the pair quite well..... provided you have a 1000BaseT switch, I am getting sync rates on the network raid of about 80-90MB/s which is Ok. The nice thing about it is you can put all your software on the network raid, and so if you are not on the primary node, you wont be able to startup the software and damage the setup since standby nodes dont have their discs mounted......so this looks like it gives the failover benefit of a SAN with normal network hardware and no iSCSI.

When we did iSCSI tests a year ago, bonnie++ was extremely successful at destroying filesystems. It appears to be really good at exposing weaknesses.
