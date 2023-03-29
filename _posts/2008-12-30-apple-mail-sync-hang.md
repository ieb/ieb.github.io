---
layout: post
title: 'Apple Mail Sync Hang'
description: ""
date: Tue Dec 30 2008 20:47:08 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/12/30/apple-mail-sync-hang/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Sometimes when offline I have noticed Apple Mail hang, especially on slow connections with lots of latency. It appears that some ADSL providers in Australia route their US bound traffic via Japan, giving high packet latencies over the Pacific (400ms), so IMAP to GMail is slower than normal. If you have been working offline for some time, Apple Mail will store your operations in an offline cache in _~/Library/Mail/IMAP-XXXX/.OfflineCache_ where the XXXX is the account name. In this folder are normally lots numbered files, and an _operations_ file. The numbered files are emails messages, and the operations file is a redo log written in binary format referencing the numbered file. When Mail comes back online it will replay the operations file.

So, if you have a slow connection, and you see that an account (via the Activity Window) is blocking with some operation, then if everything else is OK (ie the connection) you can clear this operation by selectively removing the numbered file causing the block.

Obviously this is dangerous advice, as I can give no guarantees that you will be able to work out which file you should delete or if the operation that you are invalidating will be the right one, or what will happen next :), but it worked for me with an unintentional operation on a huge email with masses of attachments that would not allow the account to go online on a 6KB/s upstream link. So use with caution as a last resort when all else fails and you are prepared for all disasters :)
