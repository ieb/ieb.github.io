---
layout: post
title: 'Ever wondered by Skype doesn''t work at home.'
description: ""
date: Fri Oct 29 2010 23:25:32 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/10/29/ever-wondered-by-skype-doesnt-work-at-home/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Have you got a router with DOS protection? Go an look at the logs and if it shows lots of denied UDP traffic, turn the DOS protection off and see what happens. Inbound Skype often uses UDP and some routers think that the inound traffic is a DOS attempt, blocking the packets and making the Skype audio sound like you are in a a cave network at best. It also kills VPN/IPSec performance. Mine went for 5KB/s upto 600KB/s when I turned it off, after posting this I will make certain my IP changes.
