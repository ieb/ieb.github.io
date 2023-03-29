---
layout: post
title: 'PyOAE renamed DjOAE'
description: ""
date: Wed May 02 2012 02:34:28 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/05/02/pyoae-renamed-djoae/
categories: "Django, Sakai Project, Uncategorized"
hero: ../../../defaultHero.jpg
---
I've been talking to several folks since my last post on PyOAE and it has become clear that the name doesn't convey the right message. The questions often center around the production usage of a native Python webapp or the complexity of writing your own framework from scratch. To address this issue I have renamed PyOAE to DjOAE to reflect its true nature.

It is a [DJango](http://www.djangoproject.com "Django (Web framework)") web application and the reason I chose DJango was because I didn't want to write yet another framework. I could have chosen any framework, even a Java framework if such a thing existed, but I chose Django because it has good production experience with some large sites, a vibrant community and has already solved most of the problems that a framework should have solved.

The latest addition to that set of problems already solved, that I have needed is data and schema migration. DjOAE is intended to be deployed in a [DevOps](http://en.wikipedia.org/wiki/DevOps "DevOps") like way with hourly deployments if needed. To make that viable the code base has to address schema and data migrations as they happen. I have started to use [South](http://south.aeracode.org/docs/) that not only provides a framework for doing this, but automates roll forward and roll back of database schema and data (if possible). For the deployer the command is ever so simple.

```
python manage.py migrate
```

Which queries the database to work out where it is relative to the code and then upgrades it to match the code.

This formalizes the process that has been used for years in [Sakai CLE](http://www.sakaiproject.org "Sakai Project") into a third party component used by thousands and avoids the nightmare scenario where all data migration has to be worked out when a release is performed.

I have to apologise to anyone upstream for the name change as it will cause some disruption, but better now than later. Fortunately clones are simple to adjust, as git seems to only care about the commit sha1 so a simple edit to .git/config changing

```
url = ssh://git@bitbucket.org/ieb/pyoae.git
to
url = ssh://git@bitbucket.org/ieb/djoae.git
```

should be enough.

If you are the standard settings you will need to rename your database. I did this with pgAdminIII without dropping the database.
