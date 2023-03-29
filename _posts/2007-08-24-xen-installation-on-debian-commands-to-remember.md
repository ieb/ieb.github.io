---
layout: post
title: 'Xen installation on Debian, commands to remember'
description: ""
date: Fri Aug 24 2007 15:32:08 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/08/24/xen-installation-on-debian-commands-to-remember/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Just a note to myself on a Xen installation on Sarge. Having managed to boot the machine into a non responsive state several times, here is how not to do it.

Apt will get the packages

If using LVM make certain of LVM2 If using udev you will need initramfs installed first to make the lvm2 parts work apt-get install lvm2 apt-get install iproute apt-get install bridge-utils apt-get install xen-hypervisor-3.0.4-1-i386-pae

PAE will allow you run in more than 4G

apt-get install linux-image-2.6.18-5-xen-686 apt-get install bridge-utils iproute sysfsutils libc6-xen xen-tools this might replace apache and a whole bunch of other things

Fix the bridge setup and xen network

Reboot.

Do the rest of the xen setup

Problems:

The 2.18 kernels do not provide LVM 1 support in the initrd boot images by default, and the boot will hang with a "waiting for route filesystem" untill busybox appears. This appears only to impact udev kernels with a initramfs built boot image. These boot images are gziped cpio unlike mkinitrd which are real filesystems. Solution: Upgrade to LVM2 and do an update-initramfs on the kernel and then check that the initrd image has the correct contents.

You should see a lvm2 script in local-top and vgchange in /sbin, if not check the initramfs-tools areas (/etc/initramfs-tools and /usr/share/initramfs-tools) to make certain that the lvm2 script is there, then check for an copy_exec in the function hooks script in /usr/share....

To unpack a initramfs image do

mkdir unpack cd unpack gunzip -c -9 /boot/test-initrd.img-2.6.18-1-686 | cpio -i -d -H newc --no-absolute-filenames GotYas:

If you boot up and bring Xend up without specifying routing parameters and ip addresses for the box, you will end up with no addressable IP on the new physical ethernet device. So if {network-setup network-bridge} is in the xend-config.sxp, peth0 will hijack eth0 and expose no IP address and not respond to ARP. Fine if your on console, not so good when you are 20 miles away with no BIOS access.

Solution:

Fix the bridging setup before you reboot, or have a 2nd Ethernet interface to break with impunity.
