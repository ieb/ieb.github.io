---
layout: post
title: 'Moving Git patch streams between repos.'
description: ""
date: Tue Jun 10 2008 22:38:25 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/06/10/moving-git-patch-streams-between-repos/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I have 2 Git repositories mirroring SVN repositories, and I want to use git to replay all the patches I made in one of the repositories to the other. The added complication is one of the SVN repos that I am mirroring uses externals, the other does not. So my source is a single repo, with no externals, and the target has externals. Fortunately I want to make all my changes in one of the modules.

So I can use the patch generations capabilities of git to generate a stream of patches. `cd sdata; git log .` tells me the stream of commits in the subdir. Having located the commit I want to start from `git-format-patch -o patches --relative d649f550a43d8f94cbe91a7c735a4a68cab4ba14 .`generates a number sequence of patch emails in a directory `gitrepobase/patches`. The `--relative` is vital since it makes the patch set relative to working directory. Unfortunately there is a bug in the next git command that means you must have the correct path for the patch to work `-p4` used to strip path elements from a patch in git-am does not work for new files.

Once the patch set is created, I dont need to email it, I can just run the patch set against the target repo from files on disk. `git-am -i ../camtools-trunk/patches/*.patch` will interactively apply patches to the target repo, asking me for each patch.

Once the patch operation is complete a `git svn dcommit` commits the changes back to the target svn repo

With a bit of scripting, it should be possible to build a complete patch set with moves and transfer it between detached repos, just as if the modifications where made to the target repo by hand.
