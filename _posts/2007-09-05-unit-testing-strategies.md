---
layout: post
title: 'Unit Testing Strategies'
description: ""
date: Wed Sep 05 2007 17:57:02 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/05/unit-testing-strategies/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
When I first wrote Search, I didn't do much detailed unit testing because it was just so hard to make it work with the whole of the Sakai framework. And because of that lack of unit testing, the development of search was hard work. I did have some unit tests that did things like launch 50 free running threads to try and break synchronization of certain parts of the search framework, but much of this I did with Sakai up and running. The cycle was slow, and the startup even slower with the sort of tests I needed to do. Recently I have been re-writing the search indexing strategies to make it more robust, using a 2 phase commit strategy controlled by 2 independent transaction managers (along the lines of XA) with a redo log of index updates. Clearly this is slightly more complex, and this time I need unit testing. So here is my personal list of do's and dont's for unit testing with sakai.

- Dont use the any static covers anywhere in your code, this kills any possibility of unit testing.
- Don't use the Sakai ComponentManager, this again will kill any possibility since it requires logging components to be ready.
- Don't bind to spring, or at least not initially.
- Do inject all your dependencies.
- Do create custom mock objects to mock up only the parts of the API's that you need, with eclipse its easy to let it do 90% of the work.
- Do start by invoking the target method, run and fill in the missing dependencies after each run, which is why I say don't bind to spring. Do all your injection in the unit test case.
- Do bring up hsql and create the tables you need.

I have done this for the new search indexer and found about 10 really strange potential bugs that might have taken months to uncover inside Sakai. I have also been able to simulate a 10 node cluster using long running unit tests under multiple copies of maven that have exposed all sorts of locking and synchronization issues that would have been hard to find in a real Sakai cluster.

The code is at <https://source.sakaiproject.org/svn/search/trunk/search-impl/impl/src/test/org/sakaiproject/search/>

Datasources at

<https://source.sakaiproject.org/svn/search/trunk/search-impl/impl/src/test/org/sakaiproject/search/indexer/impl/test/TDataSource.java>

and an example of a large test class at

<https://source.sakaiproject.org/svn/search/trunk/search-impl/impl/src/test/org/sakaiproject/search/indexer/impl/test/MergeUpdateOperationTest.java>

I am certain there will be those who say I should be using spring to do this construction, but the cycle appears to be faster with this direct route, and exposes where gettters and setters are missing, without bringing the unit test up.

Finally, If you write a really big test that you dont want to run all the time, use

mvn -Dtest=SearchSoak test

to run it explicitly. This one launches 3 un-synchronize threads representing a 3 Sakai servers and runs for 10 minutes trying to break the code.
