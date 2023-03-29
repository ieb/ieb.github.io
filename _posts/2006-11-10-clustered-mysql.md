---
layout: post
title: 'Clustered MySQL'
description: ""
date: Fri Nov 10 2006 00:40:55 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/11/10/clustered-mysql/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
If you buy fast disks, put them in a cluster and put a DB ontop of them, then you might hope the clustering mechanism might not kill all that performance you were after. With 300MB/s disks and 1000BaseT interconnect DRBD generates a 3x slow down with mysql on anything that needs disk block writes. It would probably be Ok with slow disks, but when you find that order by generates disk writes, and most of Sakai selects have order by, then your onto a non starter. So we have abandoned DRBD for our HA cluster.

We did look at a SAN based DB, but decided that it didn't satisfy some of the other requirements, including a replication slave to take hot backups from and a real redundant spare.

However, I did get MySQL replication with failover and failback working in a cluster. Failover is fast enough (
