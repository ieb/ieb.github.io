---
layout: post
title: 'Java Web Start for server applications'
description: ""
date: Sat Dec 04 2010 15:40:45 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/12/04/java-web-start-for-server-applications/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
If you want to make a Java Web Start distribution of a web application server built by maven, the there is a neat plugin to make it a bit easier, webstart-maven-plugin from org.codehaus. However, even if you give it full permissions and sign everything correctly, it probably wont work as the SecurityManager that the Java Web Start Client uses is going to stop all sorts of things, like finding the current users home directory, that a normal server app would have no problem with. So, first make certain that you have

```
<security>    
   <all-permissions/>
</security>
```

In the jnlp file.

That will give you just enough permissions to replace the security manger on the main class. If you do this before chaining to your real main class you probably wont have to change you app. All of this assumes that you app doesn't actively do something with its own security manager and policy file.

```
package org.sakaiproject.nakamura.app;
import org.apache.sling.launchpad.app.Main;
public class JNPLMain {  
     public static void main(String[] args) {
           System.setSecurityManager(null);
           Main.main(args);        
      }
}
```
