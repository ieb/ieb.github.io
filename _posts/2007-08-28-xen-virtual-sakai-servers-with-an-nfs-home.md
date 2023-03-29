---
layout: post
title: 'Xen Virtual Sakai Servers with an NFS Home'
description: ""
date: Tue Aug 28 2007 12:57:14 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/08/28/xen-virtual-sakai-servers-with-an-nfs-home/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
The aim is to create A number of Xen virtual servers with as much configuration in place to bring up Sakai, as per the previous posts, I am using an old Sarge box, with a Dom0 Xen installation and a bridged Xen network. Each client will hopefully DHCP its interface up, but I could build clients with fixed IP's.

This is a development installation where we trust the users of the Dom0 machine so I am going to sync the users information with Dom0, and NFS mount the Dom0 home directories. To make this work in the in the virtual server it needs the correct modules.

The virtual servers are built on LVM as LVM partitions, using xen-tools. I tried doing manual builds, but it takes forever to mount configure etc what is all scripted in xen-create-image script.

So the xen-create-image command populates a 4GB root filesystem with all the pre-requisites for the OS and mounting nfs home directories. I thin run a custom role that appends an NFS mount to the end of /etc/fstab, installs the JDK, maven2 and tomcat from tarballs and does some local configuration of the tomcat installation.

Since the role script to do all this is part of the xen-tools configuration, all I have to do to create a new virtiual machine for running a Sakai cluster node is to do xen-create-image --hostname sakai1 --memory 1024M --swap 1024M --role sakaisetup

wait about 3 minutes as Debian Etch is installed and then

xm create sakai1.cfg

to boot the new virtual server.

xm console sakai1

Gives me a console window

xm shutdown sakai1

powers down the virtual machine, and

xen-delete-image sakai1

deletes the image from the LVM

There is a GUI manager, but this is all so simple, why bother...... and there is VMWare..... but Xen doesn't cost, other than time and is available via apt-get.
