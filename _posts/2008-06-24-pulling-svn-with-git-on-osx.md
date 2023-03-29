---
layout: post
title: 'Pulling SVN with Git on OSX'
description: ""
date: Tue Jun 24 2008 21:46:01 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/06/24/pulling-svn-with-git-on-osx/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I meant to do this a while back, document git setup on OSX.

- Install SVN 1.4.3 from the DMG at Tigris <http://www.collab.net/downloads/community/>
- Make certain you have a gcc compiler, probably from xcode on the OSX install disks
- Build Git 1.5.5 form [source](http://git.or.cz/) with a `./configure; sudo make install`
- Symbolic link the subersion perl libraries into the perl build library `eg ln -s /opt/subversion/lib/svn-perl/SVN /System/Library/Perl/Extras/5.8.6/SVN ln -s /opt/subversion/lib/svn-perl/auto/SVN /System/Library/Perl/Extras/5.8.6/auto/SVN`

Thats Git installed, now to sync the repo you are after using git-svn, now go an read [Git for SVN Users](http://git.or.cz/course/svn.html)

Having done that to mirror an SVN repo do

`git-svn clone http://svn.foo.org/project/trunk cd trunk`

And start working. `git commit .`will commit locally, `git svn dcommit` will commit all changes to the remote SVN and rebase your local gir repo to the remote svn

There are man pages on all of this and more ... worth reading
