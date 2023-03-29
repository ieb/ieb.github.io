---
layout: post
title: 'Jackrabbit2 User Manager Scaling.'
description: ""
date: Sun Mar 07 2010 11:09:13 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2010/03/07/jackrabbit2-user-manager-scaling/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
In Jackrabbit 1.x the User manger (at least after 1.5) stored users in a security workspace within the repository. This was great, and works well upto about 1000 users. However it uses a structure where users are nested in the user that created the user. If if "admin" creates all your users, then there will be 1000 child nodes to the admin user node. Sadly, additions become slower the more child nodes there are. Pretty soon a number of things happen. The number of child nodes causes updates to be come so slow it hard to add users (>5K users). This can be addressed by a sharding the child node path, avoiding large numbers of child nodes. Secondly (and this is harder to solve), the query that is used to find a user, or to check that the user doesn't exist somewhere becomes progressively more expensive. So that when you get to about 25K users the create user operation has slowed by an order of magnitude. That may not sound too bad, since its not often that you want to create a user, however, retreval of a user that becomes slower as well since you cant calculate the location of the user node from the userID, and since this needs to be done on almost every request, it slows everything.

Fortunately it looks like all of this has been fixed in Jackrabbit 2. Now the UserManager does not store users in a nested form, it has an autoscaling sharding mechanism and the search query generates results that are far more direct. Some of this is not enabled by default, but here is the config that makes it work.

In repository.xml

```
<!DOCTYPE Repository 
       PUBLIC "-//The Apache Software Foundation//DTD Jackrabbit 2.0//EN"
"http://jackrabbit.apache.org/dtd/repository-2.0.dtd">
<Repository>
     <FileSystem>
        <param name="path" value="${rep.home}/repository"/>
     </FileSystem>
     <Security appName="Jackrabbit">
        <SecurityManager workspaceName="security">
<strong>           <UserManager>
             <param name="defaultDepth" value="4" />
             <param name="autoExpandTree" value="true" />
             <param name="autoExpandSize" value="500" />
           </UserManager>
</strong>        </SecurityManager>
        <AccessManager>
        </AccessManager>
...
```

In tests in Sling I see no slowdown in user creation upto 10K node. With HTTP requests ranging from 12-25ms. To add those 10K nodes from a single request thread takes 6m4s, a rate of about 27/s. The same test performed with Sling on Jackrabbit 1.6 was averaging 6/s over 10K nodes. Concurrent add operations tend to speed this up further as the http cost is factored out. My laptop runs out of steam at about 70/s.

User Node paths that are generated are of the form

```
.../t/te/testuser201003070946420-300
```

with auto scaling in operation they become

```
.../t/te/tes/test/testu/testus/testuse/testuser/testuser2/testuser20/testuser201/testuser2010/testuser20100/testuser201003071035370-4998
```

However this is an extreem case where all the user ID's are almost identical.

Conclusion.

If you have a app that has a lot of users, use Jackrabbit 2 not Jackrabbit 1.6, as it scales better.
