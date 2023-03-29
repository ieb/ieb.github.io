---
layout: post
title: 'Flashback'
description: ""
date: Fri Apr 06 2012 23:56:28 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/04/06/flashback/
categories: "flashback, Uncategorized"
hero: ../../../defaultHero.jpg
---
The world wakes up to an OSX virus. News media jumps on the story terrifying users that they might be infected. Even though the malware that users were tricked to install may not be nice its clear from looking at the [removal](http://www.f-secure.com/v-descs/trojan-downloader_osx_flashback_c.shtml) procedure that unlike Windows platform were a virus normally buries itself deep within the inner workings of the OS, this trojan simply modified an XML file on disk and hence reveals its location. To be successful in doing that it would have had to persuade the user to give it elevated privileges as the file is only writable by the [root user](http://en.wikipedia.org/wiki/Superuser "Superuser"). If it failed to do that it would have infected [user space](http://en.wikipedia.org/wiki/User_space "User space").

In spite of all the hype around this infection, the root of infection shows that the underlying OS is, in it self, secure and so only as secure as the user who grants and installer elevated privileges. If, when you install software on you Mac you are not prompted for a administrative password, go and find out why before something else quietly installs itself and steals your bank details.

The files involved are the plist file (Info.plist) for any browser, so when you look to see if you have been infected, dont forget to check all browsers you use, not just Safari and Firefox. Also check Chrome.

If you are wondering if other plists are secure, many are cryptographically signed with a private key belonging to Apple. Provided that key doesn't leak undetected those plists cant easily be compromised. For anyone who is paranoid, the standard Unix tools like tripwire would protect any unsigned plists.
