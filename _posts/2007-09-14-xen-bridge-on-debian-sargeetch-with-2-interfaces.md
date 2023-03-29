---
layout: post
title: 'Xen Bridge on Debian Sarge/Etch with 2 interfaces'
description: ""
date: Fri Sep 14 2007 16:03:54 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/14/xen-bridge-on-debian-sargeetch-with-2-interfaces/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
The standard network-bridge script that comes with Xen on Debian Sarge does not appear to work. The problem appears to be that the network script after converting the hardware ethernet into a promiscuous port (peth1), and binding a virtual port veth0.1 to the bridge, it fails to binf the fake eth1 to the virtual port.

I dont know if its the right solution, but binding the new fake eth1 to the bridge xenbr0, makes it all work.

```
brctl delif xenbr0 veht0.1
brctl addif xenbr0 eth1
```

Does the trick.

If you want to correct the scripts change the lines

```
       ip link set ${bridge} up
       add_to_bridge  ${bridge} ${vif0}
        add_to_bridge2 ${bridge} ${pdev}
        do_ifup ${netdev}
```

to

```
       ip link set ${bridge} up
        add_to_bridge  ${bridge} ${netdev}
        add_to_bridge2 ${bridge} ${pdev}
        do_ifup ${netdev}
```

and

```
      brctl delif ${bridge} ${pdev}
        brctl delif ${bridge} ${vid0}
        ip link set ${bridge} down
```

to

```
      brctl delif ${bridge} ${pdev}
        brctl delif ${bridge} ${netdev}
        ip link set ${bridge} down
```
