---
layout: post
title: 'Timer leaks'
description: ""
date: Fri Sep 21 2007 10:18:29 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/21/timer-leaks/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
If you use Timer and TimerTask you may find some strange with one shot TimerTasks, i.e. ones that run just once after a delay. If you add a lot of them to the Timer, they tend to be held onto by the Timer itself, and hence if there are any references these will also not get GC'd.

The JavaDoc appears to say that if you cancel the task eg TimerTask.cancel(), and then Timer.purge the references should be released, however in tests I have done this does not appear to happen in JDK 1.5.

If you want to delay invocation of events, then a java.util.concurrent.DelayQueue is probably a good alternative. The Queue can be processed periodically by a single TimerTask, resulting in no memory leak.
