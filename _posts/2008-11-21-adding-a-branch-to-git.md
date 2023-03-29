---
layout: post
title: 'Adding a Branch to Git'
description: ""
date: Fri Nov 21 2008 14:46:48 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/11/21/adding-a-branch-to-git/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
One of the benefits of Git is that its easier to manage and merge in multiple branches. You can do this with a svn git repo by pulling the svn branches into the git repo to perform merge operations locally, before committing back to the svn branch. Normally you might have pulled the whole tree from svn including the branches and tags with _git svn clone http://myrepo.com/svn -T trunk -b branches -t tags_ but what do you do if you only took out the trunk and want to add the branch in.

In the git repo there is a file .git/config that contains a list of repote repos including the remote svn repos. git svn manages its operation by having remote branches in the git repo, you can see them with _git branch -a_ but whatever you do dont touch any of the svn branches in your git repo.

So we have a git repo and we want to add a single branch in to be able to merge into that branch. Here is how.

## 1. Edit the .git/config file to add another remote repo

I am using the Apache Shindig repo, which I just did a branch on.... which is why I need to get it into my git repo.

```
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
[svn-remote "svn"]
        url = https://svn.apache.org/repos/asf/incubator/shindig/trunk
        fetch = :refs/remotes/git-svn
```

I then add the new branch so my .git/config looks like this:

```
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
[svn-remote "svn"]
        url = https://svn.apache.org/repos/asf/incubator/shindig/trunk
        fetch = :refs/remotes/git-svn
[svn-remote "svn081x"]
        url = https://svn.apache.org/repos/asf/incubator/shindig/branches/0.8.1-x
        fetch = :refs/remotes/git-svn-0.8.1-x
```

This adds the branch svn081x to my git repo, as a svn-remote and points it to the svn branch 0.8.1-x. It also gives it a fetch reference that is unique. At this point the git repo doesnt have anything in that branch so we need to fetch the branch, but we need to give git a bit of help at this point. We need to give it a revision on the branch so it can walk back down the branch to find the branch point. The revision of branch would also be Ok. \_svn log --stop-on-copy https://svn.apache.org/repos/asf/incubator/shindig/branches/0.8.1-x \_is going to help here as this will list all the commits to svn on the branch.

## 2. Fetch the branch

```
git svn fetch svn081x -r719438
```

svn081x is the name of the remote branch in the .git/config and the revision is on the branch and close to the branch point. If you chose a revision that is not on the branch, you will get a url not found error from svn. If this works you will see the files in the branch being added to your local repo.

At this point you can see the branches you have with a

```
x43543:trunk ieb$ git branch -a
* master
  git-svn
  git-svn-0.8.1-x
```

Which shows the remote branches and the master which is active. Dont start working on the git-svn-0.8.1-x branch as its a remote branch that you should not touch. We need to create a git branch that is based on the remote first.

## 3. Create a branch from the remote branch

```
git checkout git-svn-0.8.1-x
git checkout -b master-0.8.1-x
```

The first switched to the git-svn-0.8.1.x branch and the second creates a new branch from the current branch called master-0.8.1-x. So we now have a working branch called master-0.8.1-x on which to work.

```
x43543:trunk ieb$ git branch
  master
* master-0.8.1-x
```

git checkout master will switch the branch back to the trunk, and git checkout master-0.8.1-x will switch back to the branch. Now you can merge to your hearts content and git svn dcommit back to the svn repo when you are happy with the results.
