---
layout: post
title: 'Maven2 Sakai .. more'
description: ""
date: Sun Dec 10 2006 13:13:35 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/12/10/maven2-sakai-more/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
So I now have a set of poms for all apart from OSP that verify and go through the build. The XSLT approach has been augmented by scripts and manual editing to manipulate the poms into a structure that builds.

The Sakai build exposes some bugs in maven that have cause me to have to change the structure of the way in which we define dependent or parent projects. M2 will not reliably chain many masters together, so the extend constructs found in gradebook, sections, osp and some jsf tools have to be recast. The mechanism that appears to work is to make all projects have a parent of the master/pom.xml and then pull the other dependencies through as dependent poms, this works and gives good control (as well as allowing multiple extends)

The next issues that hits us is that m2 has transient dependencies, all of which get packed unless marked as provided, and that includes the transients. So you have to mark all jars as provided that are provided even in the impl poms otherwise they will pull shared or common jars into component and webapp builds wich is wrong. Since we are comming from M1, where re definend everything the solution here is to make everything provided and use the explicit pack at the last stage (which leads back to the shared and common issues before)

The other real killer that happens here is that M2 will inspect transient deps from standard poms, for example struts has a burred dep on jdbc_stdext, which we dont use has we are in a hibernate world... we use a h2.1.8 version of this, I dont know exactly why this is, but the solution I have used is to modify the struts pom in the local repository to depend on the correct one. Struts is used in samigo and since that is heavilly hibernate this looks like the safe thing to do.

Another thing that is different about M2 is that it hides the deps that appear in the classpath without you knowing it. For instance the xercese dependencies appeared without you knowing it in M1. In M2 you have to define them (as provided), so there are a number of poms (5-10) that have had these deps added manually when the compile fails.

Finally,

Since we have used our own repository, I am finding that I need to manually build the local repository for maven2 as deps cant be found. This will need to be propagated to somewhere central and hosted by sakai.

Inspite of all that, M2 is much nicer to work with. For those interested, I am keeping the plugin development at https://source.sakaiproject.org/contrib/tfd/trunk/maven
