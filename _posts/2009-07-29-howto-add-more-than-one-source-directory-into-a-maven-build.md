---
layout: post
title: 'HowTo: add more than one source directory into a maven build'
description: ""
date: Wed Jul 29 2009 15:36:46 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/07/29/howto-add-more-than-one-source-directory-into-a-maven-build/
categories: "Apache Maven, Build Management, Java, Uncategorized"
hero: ../../../defaultHero.jpg
---
There are more project builds that use code generators to convert model files or interface descriptions into code and associated resources. The normal approach is to generate the code every time and place it in the ..../target area of the build so that its gets built duging maven's compile phase. However there are times when you want to generate the code rarely, and have it form part of the code base. If this is the case, then putting it in the man source tree, with all the hand crafted code can be dangerous and confusing. Ideally generated code, even if you keep it for a long time, should really go in its own source tree. eg .../src-generated.

The problem is, by default, maven only allows one source tree per project, and building a jar just for the generated code base might be too painful. There is no standard pom way of adding further source trees into the main maven build, but there is the maven build-helper-maven-plugin, that can amongst other things, inject additional source and resource locations into the build. The example below adds generated sources, tests and resources into a standard build.

```
<plugin>
 <groupId>org.codehaus.mojo</groupId>
 <artifactId>build-helper-maven-plugin</artifactId>
 <version>1.4</version>
 <executions>
   <execution>
     <id>add-wsdl-source</id>
   <phase>generate-sources</phase>
   <goals>
     <goal>add-source</goal>
   </goals>
   <configuration>
     <sources>
       <source>${basedir}/src-generated/src</source>
     </sources>
   </configuration>
 </execution>
 <execution>
   <id>add-wsdl-test-source</id>
   <phase>generate-sources</phase>
   <goals>
     <goal>add-test-source</goal>
   </goals>
   <configuration>
     <sources>
       <source>${basedir}/src-generated/test</source>
     </sources>
   </configuration>
 </execution>
 <execution>
   <id>add-wsdl-resource</id>
   <phase>generate-sources</phase>
   <goals>
     <goal>add-resource</goal>
   </goals>
   <configuration>
     <resources>
       <resource>
         <directory>${basedir}/src-generated/resources</directory>
         <targetPath>target/classes</targetPath>
       </resource>
     </resources>
   </configuration>
 </execution>
 </executions>
 </plugin>
```
