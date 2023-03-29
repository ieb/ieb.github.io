---
layout: post
title: 'Resetting Continuum passwords'
description: ""
date: Fri Jan 26 2007 10:52:50 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/01/26/resetting-continuum-passwords/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
The only place I could find info on resetting a Continuum password, was as a patch in Codehaus JIRA.

http://jira.codehaus.org/secure/attachment/23421/CONTINUUM-956.patch

In short, Passwords are stored as SHA-1 hashes in the SA.CONTINUUMUSER table.

So

1\. Shutdown continuum. 2. create a new SHA-1 password eg echo 'mypassword' | openssl dgst -sha1 3. Download a copy of Apache Derby 4. DERBY_HOME to this location eg export DERBY_HOME=/Users/ieb/db-derby-10.2.2.0-bin 5. Execute the Embedded Classpath setup eg db-derby-10.2.2.0-bin/bin/setEmbeddedCP 6. Start up ij eg db-derby-10.2.2.0-bin/bin/ij 7. At the ij prompt connect to your continnum databse eg connect 'jdbc:derby:/Users/ieb/continuum/apps/continuum/database'; 8. select \* from SA.CONTINUUMUSER; 9. UPDATE SA.CONTINUUMUSER set HASH_PASSWORD = 'the sha1 from step 2' where ACCOUNT_ID = 6;

You will need to check the steps in 8 and 9 for syntax and schema names. ACCOUNT_ID = 6 represents the account where the password is being reset.

10\. commit; 11. exit;

Then restart continuum and login with 'mypassword' or whatever you used in step 2.

If that fails... you may have to drop the DB and restart.

To avoid this.... always have 2 admin users... then if one fails you can always use the other one to reset things.
