---
layout: post
title: 'Maven1 Maven2 synchronization'
description: ""
date: Fri May 11 2007 00:24:24 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/05/11/maven1-maven2-synchronization/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Maven 2 is now building in trunk, but the other problem that I'm trying to fix the jars that are deployed and where they are deployed to, there are 2 a number bash commands Im using to automate this process, recorded here so I dont forget them.

To do the maven1 and maven2 builds, I am deploying to dumy empty deployment targets, tomcatm1deploy and tomcatm2deploy

`#maven2 mvn -o -Dmaven.test.skip=true -Dmaven.tomcat.home=/Users/ieb/Caret/sakai22/tomcatm2deploy/ clean install sakai:deploy #maven 1 maven -Dmaven.test.skip=true -Dmaven.tomcat.home=/Users/ieb/Caret/sakai22/tomcatm1deploy/ cln bld dpl`

Then to compare the deployed unpacked components and packed wars

`find tomcatm1deploy -print | sed s/tomcatm1deploy/deploy/ | grep -v WEB-INF/tld > m1deploy find tomcatm2deploy -print | sed s/tomcatm2deploy/deploy/ | sed s/M2/dev/ | grep -v maven | grep -v web.xml > m2deploy diff m1deploy m2deploy`This gives a list of differences that can be inspected manually to find the differences in deployment profile.

Next step it to unpack all the wars and compare the deployed jars within the wars. This is a little more complicated, find the wars into a file, sort the list of wars in each deployment and then iterate through listing the contents of the wars for jars only, comparing the final result.

`` #find the wars and store them find tomcatm1deploy -name '*.war' | sort > m1wars find tomcatm2deploy -name '*.war' | sort > m2wars # unpack for i in `cat m1wars `; do echo START $i; jar tvf $i | grep jar | cut -d'/' -f2- ; echo END $i; done > m1deploywars for i in `cat m2wars `; do echo START $i; jar tvf $i | grep jar | cut -d'/' -f2- ; echo END $i; done | sed s/M2/dev/ > m2deploywars # compare diff m1deploywars m2deploywars ``Finally you have to dig though the poms and porject.xml files to make the deployments the same. This can mean overriding the transitive dependencies in jars.
