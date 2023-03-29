---
layout: post
title: 'HSQL Unit testing'
description: ""
date: Tue Sep 18 2007 16:35:46 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/09/18/hsql-unit-testing/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Dont be fooled by HSQL Unit testing... its transaction isolation may lead you to beleive that your unit tests are working perfectly, but its doesnt support READ_COMMITTED transaction isolation, and its a true transaction monitor when it comes to committing the data, ie the code is single threadded. Since Sakai uses READ_COMMITTED for its transaction isolation in production, rahter than READ_DIRTY, tests that work on HSQL will not work in production, and tests that work in production wont work in HSQL.

```
update testtable set x = x + 1 where id = 99;
select x from testtable where id = 99;
commit;
```

If test table contains 1, and you do this in HSQL on multiple threads, there will be collisions on what is selected from testtable, since the sect reads the dirty data direct from the database, and not the data in the transaction. In MySQL and Oracle, each thread will give a unique number since a) the select is taken from the value in the transaction and, b) until the commit fires, the record is locked for update. Most of the time it doesnt matter, but if you are doing any tests that involve more than one thread, beware.

There is an alternative, DerbyDB from apache, that has an Apache license and so can be used in maven poms, however the dialect is not the same as Oracle, MySQL or HSQL. Have a read of [this](http://mail-archives.apache.org/mod_mbox/db-derby-dev/200501.mbox/%3C446591124.1106594315052.JavaMail.jira@ajax.apache.org%3E) for more details.
