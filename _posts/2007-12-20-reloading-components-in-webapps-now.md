---
layout: post
title: 'Reloading components in webapps... now :)'
description: ""
date: Thu Dec 20 2007 00:42:28 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/12/20/reloading-components-in-webapps-now/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
All this talk of a requirement for reloading components as a requirement for developers got me thinking. Webapps do load spring context, so why not write a context listener for a webapp that loads that webapp up as a component ? Well at the moment almost nothing. Provided I treat the webapp the same as I would a component. I can change the packaging from component to war in pom.xml, add web.xml to the WEB-INF folder with a modified context listener class that loads the component with a new classloader and the correct context classloader. Start up tomcat and hot deploy. The component comes up. I can then redeploy, and I get a whole bunch or spring Infos about bean overloads. And relaoding works, no tomcat restart required.

So what about dependencies ? Well I am doing a tool and a component. My Tool depends on my component, but nothing depends on my component. Maven builds them in order, and so tomcat deploys them in order. The component first and then the tool. So the load order is correct. Obvously, if you reload the component, you have to reload the tool, and anything else that depends on the component, so this technique is not for all.

Problems: Yes, I am not saying this works 100% but I have only tried 2 reloads so far and at the moment not entirely successful. Im trying Rwiki, which has about 5 spring config files in the component. It depends on Hibernate, and sine I shared the same global Session Factory as the rest of sakai, which has already started long ado, Hibernate doesnt know about my Pojos... but there are other tools that use Hibernate in tools, not great for production, but perhapse Ok for faster development. Annother problem I have encountered so far, but not tried to fix is that some of the properties processing doesnt work. Things like \${aproperty.value} and abc@springId dont work, but only because there apear to be the wrong property conversion mechanisms in place.

If I get it working well, I will commit the code somewhere

Update:

Leaving the orriginal components pack in place loads the Hibernate Pojos. Then when you create the new beans from the webapp, they replace the beans in the component. I can now reload RWiki's component without restarting tomcat. It is a full Entity component with Hibernate storage
