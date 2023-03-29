---
layout: post
title: 'What do do when your ISP blocks VPN IKE packets on port 500'
description: ""
date: Thu Nov 12 2015 15:16:45 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2015/11/12/what-do-do-when-your-isp-blocks-vpn-ike-packets-on-port-500/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
VPN IKE packets are the first phase of establishing a VPN. UDP versions of this packet go out on port 500. Some ISPs (PlusNet) block packets to routers on port 500, probably because they don't want you to run a VPN end point on your home router. However this also breaks a normal 500&lt;->500 UDP IKE conversation. Some routers rewrite the source port of the IKE packet so that they can support more than one VPN. The feature is often called a IPSec application gateway. The router keeps a list of the UDP port mappings using the MAC address of the internal machine. So the first machine to send a VPN IKE packet will get 500&lt;->500, the second 1500&lt;->500, the third 2500&lt;->500 etc. If your ISP filters packets inbound to your router on UDP 500 the VPN on the first machines will always fail to work. You can trick your router into thinking your machine is the second or later machine by changing the MAC address before you send the first packet. On OSX

To see the current MAC address use ifconfig, and take a note of it.

then on the interface you are using to connect to your network do

```
sudo ifconfig en1 ether 00:23:22:23:87:75
```

Then try and establish a VPN. This will fail, as your ISP will block the response to your port 500. Then reset your MAC address to its original

```
sudo ifconfig en1 ether 00:23:22:23:87:74
```

Now when you try and establish a VPN it will send a IKE packet out on 500&lt;->500. The router will rewrite that to 1500&lt;->500 and the VPN server will respond 500&lt;->1500 which will get rewritten to 500&lt;->500 with your machine IP address.

## How to debug

If you still have problems establishing a VPN then using tcpdump will show you what is happening. You need to run tcpdump on the local machine and ideally on a network tap between the router and the modem. If you're on Fibre or Cable, then a Hub can be used to establish a tap. If on ADSL, you will need something harder.

On your machine.

```
sudo tcpdump -i en1 port 500
```

On the network tap, assuming eth0 is unconfigured and tapping into the hub. This assumes that your connection to the ISP is using PPPoE. Tcp will decode PPPoE session packets, if you tell it to.

```
sudo tcpdump -i eth0 -n pppoes and port 500
```

If your router won't support more than 1 IPSec session, and uses port 500 externally, then you won't be able to use UDP 500 IKE unless you can persuade your ISP to change their filtering config.
