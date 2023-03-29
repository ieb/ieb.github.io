---
layout: post
title: 'The trouble with Time Machine'
description: ""
date: Wed May 09 2012 09:56:14 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/05/09/the-trouble-with-time-machine/
categories: "Apple, Time Capsule, Time Machine, Uncategorized"
hero: ../../../defaultHero.jpg
---
Every now and again [Time Machine](http://en.wikipedia.org/wiki/Time_Machine_%28Mac_OS%29 "Time Machine (Mac OS)") will spit out a "Cant perform backup, you must re-create your backup from scratch" or "Cant attach backup". For anyone who was relying on its rollback-time feature this is a reasonably depressing message and does typify modern operating systems, especially those of the closed source variety. At some point, having spent all the budget on pretty user interfaces, and catered for all use cases the deadline driven environment decides, "Aw stuffit we will just popup a catch all, your stuffed mate dialog box". 99% of users, rant and rave and delete their backup starting again with a sense of injustice. If your reading this and have little or no technical knowledge, thats what you should do now.

If you get down to bare nuts and bolts you will find that a Time Machine backup is not that disimular to a [BackupPC](http://en.wikipedia.org/wiki/BackupPC "BackupPC") backup of 10 years ago. It makes extensive use of hard links to snapshot the state of the disk. It perform this in folders with thousands of files creating uniformly distributed tree. That all works fine except when it doesn't. Anyone who has used hard links in anger on a file system will know it tends to put the file system under a lot of stress resulting in more filesystem corruptions than normal. File systems are not that transactional so if an operation fails part way through, then the hard links may start to generate orphaned links.

Now TimeMachine runs fsck_hsf when it attaches a [sparse bundle](http://en.wikipedia.org/wiki/Sparse_image "Sparse image") file system which is the Time Machine backup. Unfortunately it doesn't try that hard to fix any problems it finds and couldn't possibly corrupt its pretty UI by telling the user that it might have a problem with the users cherished backup of life's memories. Not good for marketing, loosing your loyal customers photos when you promised them it wouldn't happen. Fortunately, those messages are logged in /var/log/fsck_hfs.log. If you use Time Machine and are finding the attach stage takes forever. Take a look in there for the words "FILESYSTEM DIRTY". That indicates, that the last time Time Machine tried to attache the drive the file system check was unable to check the file system and correct any errors, and so, it marked it DIRTY. It is possible to correct one of these filesystems, however, with all those hard links the likelyhood is that your filesystem, even if fsck_hfs -dryf /dev/discXs1 does correct the errors and put it into a FILESYTEM CLEAN state, it wont be a usable and valid backup. When your laptop exits you house with a man wearing a stripy jumper and tights over his head, your children (and you) will cry realising that the backup in the cupboard is corrupt.

What advice can I give you?

1. Check your backups regularly
2. If you use TimeMachine, open the "console" program, type DIRTY into the search box and if you find that word, go out an buy another backup disk.... quick.

For those that want to try and recover a Time Machine backup.

```
chflags -R nouchg /Volumes/My\ Time\ Capsule/mylaptop.sparsebundle
hdiutil attach -nomount -noverify -verbose -noautofsck /Volumes/My\ Time\ Capsule/mylaptop.sparsebundle
tail -f /var/log/fsck_hfs.log
# If you see  "The Volume could not be repaired"
# then you need to run
fsck_hsf -dryf /dev/rdiskXs2
# where X was the number of disk listed when you hdutil attached.
# I can almost guarentee that the disk will not be recoverable and you will see tens of thousands
# of broken hard link chains. Fixing those will probably corrupt the backup.
# which is why this is futile.
```

If you are using a [Time Capsule](http://en.wikipedia.org/wiki/Time_Capsule_%28Apple%29 "Time Capsule (Apple)"), power cycle it first, connect your machine to it of 1000BaseT and make sure no other machines are accessing it. Don't use Wifi unless you want to grow old and die before the process completes.

## Update

Perhaps I am being a little unfair here. The same unreliability could happen with any backup mechanism that is vulnerable to corrupted backups as a result of the user shutting the lid, the computer going to sleep, a power failure. Time Machine and Time Capsules weakness is that its all to easy to disconnect the network hard disk image and once you do that the Time Capsule end has no way of shutting down the back up process in a safe way. Do that enough times (I have found 1 is enough) and the backup is corrupt and unrecoverable and even the HFS+ Journal can't recover.

I was also a bit unfair on BackupPC, which is initiated from the server and so although it may create nightmare file systems, can leave the backup image in a reasonable state when the server looses sight of the client.

Time Machine on an attached drive appears more reliable, but a lot less useful.
