---
layout: post
title: 'Performin a Mvn Release (Notes)'
description: ""
date: Wed Oct 15 2008 13:02:07 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/10/15/performin-a-mvn-release-notes/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Maven perorms a release by editing the pom files and replacing the version numbers, it then commits the edited files after a build. Having doen that it re-edits the poms to the new trunk, and commits again.

The standard release plugin configuration does a mvn clean verify, which can fail if you have plugins that depend on artifacts that should have been added to the local repo. You can change this by either doing a mvn clean install after the failed mvn release:prepare, or re-configure the goals for the release plugin. (see below).

mvn release:perform only checks out the tag, and runs the perform goals usually deploy site-deploy, so you can do this step manually with a checkout and a mvn deploy.

The other thing that the mvn release:prepare does is edit all the svn urls to match the new destination of the tag, so when doing a branch its probably best to use mvn release:branch -DbranchName=kernel-1.0.x to perform the branch as this will keep all the svn urls in place.

The final thing on the release, where no SVN urls are specified in the pom, the fielsystem path from the last pom that did have the svn urls specified, MUST match the the path in SVN otherwise the tagging/branching/committing will get lost and muck it all up. I find it easier just to spevify the location in svn in each pom.

So, here is how to re-config the goals used to verify a tag, I have added install because I have an assembly project in the build that needs things in the local repo.

```
<build>
<plugins>
...
     <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-release-plugin</artifactId>
        <configuration>
        <preparationGoals>clean install verify</preparationGoals>
        </configuration>
      </plugin>
```

```
</plugins>
</build>
```
