---
layout: post
title: 'Maven Ant Plugin'
description: ""
date: Wed Dec 13 2006 10:56:39 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/12/13/maven-ant-plugin/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
Although the docs are a bit thin, the maven-ant-plugin works well for Maven 2 so you can port maven.xml into this form in some instances.

The following will run in the package phase of at build just before the war is packaged up. (from sakai sections tool)

The variable names are maven variables not ant names, there is a bit of confusion about this.

eg

```
<plugins>
<plugin>
<artifactId>maven-antrun-plugin</artifactId>
<executions>
<execution>
<phase>package</phase>
<configuration>
<tasks>
<delete dir="${project.build.directory}/${project.build.finalName}/common" />
<delete dir="${project.build.directory}/${project.build.finalName}/sakai" />
<delete dir="${project.build.directory}/${project.build.finalName}/standalone" />
<echo message="Copying common resources into webapp"/>
<copy todir="${project.build.directory}/${project.build.finalName}" overwrite="true" >
<fileset dir="${basedir}/src/webapp/common" />
</copy>
<echo message="Copying sakai dependent resources into webapp"/>
<copy todir="${project.build.directory}/${project.build.finalName}" overwrite="true">
<fileset dir="${basedir}/src/webapp/sakai/">
<include name="**/*"/>
</fileset>
</copy>
</tasks>
</configuration>
<goals>
<goal>run</goal>
</goals>
</execution>
</executions>
</plugin>
</plugins>
```
