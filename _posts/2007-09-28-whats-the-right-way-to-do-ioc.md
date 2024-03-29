---
layout: post
title: 'What''s the right way to do IoC ?'
description: ""
date: Fri Sep 28 2007 14:27:19 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/28/whats-the-right-way-to-do-ioc/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
When we talk about IoC, there is a vast spectrum of IoC complexity that we are willing to accept. Those who love Spring IoC in XML will create 1000's of lines of XML and proudly show 5 lines of Java. On the other end of the scale there are those that IoC 2 or 3 large beans to represent the exposed bean. Which is right or better ? I have no idea, both are probably right depending on your religion. Here are some observations.

Static Factory patterns are a complete pain, make it hard to unit test and eliminate most deployments options, hence why we use IoC.

Manual construction of large bean structures prior to resorting to IoC reduces configuration post distribution but reduces the complexity of the deployed exposed beans. It also, is compiled and so the structure can be largely validated at compile time. This is still IoC, its just IoC using fixed method calls rather than invoked by some IoC management framework. So manual in code IoC simplifies what is exposed to the deployer and makes the configuration of the component more reliable.

On the other hand, doing all the IoC within Spring XML maintains flexibility, but increases complexity and delays much of the validation until the runtime. Excessive Spring XML is effectively programming in XML, and should not be confused or excused as not lines of code. Its all code. The positive side of this approach is the end result is highly configurable and customizable, but on the down side its almost impenetrable except by the author, and sometimes on the day they wrote it. So heavy use of XML IoC can de-stableize the deployment packages and confuse all but the authors with unnecessary detail.

So as I test I did both, I have about 50 beans that are reused multiple times and use pure getter setter IoC. There is only 1 new() in all the bean code. I constructed Unit tests with in code IoC in the test case classes. In general it takes about an hour to construct the work from scratch doing manual edits in eclipse. Then for production I did a pure spring XML file. This has taken about 14 hours to construct so far even with SpringIDE in eclipse. Maybe I am a slow typist, or SpringIDE isn't helping me enough, but the lack of edit time validation the subtler details of the XML and the final validation at runtime appears to be slowing the development cycle.

I will stick with the Spring XML for this component, but it makes me wonder if there is a better way. Google Guice uses @Inject annotations and Models to do all the IoC directly in the code. Its clearly now as wide as Spring.... but it looks much easier to simple IoC and eliminates all the XML files.

Whatever the right way is, it has to allow the developer to cycle fast and make progress.
