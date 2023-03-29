---
layout: post
title: 'Code Quality'
description: ""
date: Mon Sep 01 2008 00:46:32 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/09/01/code-quality/
categories: "quality, shindig, Thought"
hero: ../../../defaultHero.jpg
---
What do you do if you have no idea who might use your code, and you want to be able to sleep at night ? Simple, you make certain that all the lines of code you write for all the situations you can think of are covered by a unit test, so you dont get a 4 am call out to something that you broke. Fortunately open source code doesn't come with a Blackberry you **have **to answer or a pager thats always on, but that doesn't mean that there isn't a sense of responsibility to others that use your code. Even if what you write disappears into a corporation and supports perhaps millions of users, I still feel a sense that I should make every effort to make it as solid and reliable as I can.

A level of testing that allows me to sleep can't be achieved by just writing unit tests. There needs to be a number of tools to help, and a number of additional concepts. At the simple level, unit tests generate code coverage and high levels of coverage like Shindig's social API see [http://people.apache.org/~ieb/shindig/shindig-parent/shindig-social-api/cobertura/index.html](http://people.apache.org/~ieb/shindig/shindig-parent/shindig-social-api/cobertura/index.html "Shindig Social API Coverage") generate increasing quality. The code is know to work before it hits a server environment and patches don't introduce quite bugs that only become noisy in production. Cobertura or any other coverage reporting tool is vital in identifying lines of code that haven't been tested or scenarios that are not covered.

The second tool to generate quality is FindBugs, that will tell the developer about bad or dangerous code patterns. Having reports running as part of the build gets these reports close to the developer, and once you have added FindBugs annotations the developer gains control over false positives.

To a lesser extent Check Style reports like [http://people.apache.org/~ieb/shindig/shindig-parent/shindig-social-api/checkstyle.html](http://people.apache.org/~ieb/shindig/shindig-parent/shindig-social-api/checkstyle.html "Check Style Report") can also identify overly complex or potentially buggy code.

All of these tools and reports are great at improving code quality, but there is one increasingly important area where they fail. Multicore processors are encouraging more and more use of parallelism within our applications. Scaleable web applications are starting to consider overlaying network wait times within a single request to minimize the request latency. With this inprocessor parallelism, single JVM testing cannot simulate or test the real randomness of an application under load, as the JVM is inherently synchronized with the testing framework. To achieve realistic testing I would argue that there needs to be some randomness in the testing sequence and profile. Only with this randomness, can a testing framework expect to expose those race conditions that only happen when networked machine are communicating over unpredictable connections in a truly disconnected environment.

Now I can sleep.
