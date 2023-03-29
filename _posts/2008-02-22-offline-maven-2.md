---
layout: post
title: 'Offline Maven 2'
description: ""
date: Fri Feb 22 2008 19:44:51 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/02/22/offline-maven-2/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Ever tried to run maven 2 with no network and Snapshots, after midnight.... its hard because it likes to check for updates of snapshots. The following in ~/.m2/settings.xml might help.

`<?xml version="1.0"?>

  <settings>
   <profiles>
     <profile>
       <repositories>
         <repository>
           <id>local-repository</id>
           <url>file:////Users/ieb/.m2/repository</url>
         </repository>
       </repositories>
       <id>local-offline</id>
     </profile>
   </profiles>

   <activeProfiles>
     <activeProfile>local-offline</activeProfile>
   </activeProfiles>
</settings>
`
