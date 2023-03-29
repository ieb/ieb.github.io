---
layout: post
title: 'Follow Up: ORM'
description: ""
date: Wed Jun 13 2012 22:27:28 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/06/13/follow-up-orm/
categories: "Django ORM, NoSQL, Object-relational mapping, ORM, SQL, Uncategorized"
hero: ../../../defaultHero.jpg
---
My last post was about the good the bad and the ugly of ORM. Having just suprised myself at the ease with which its was possible to build a reasonably complex query in Django ORM, I thought it would be worth sharing by way of an example. The query is a common problem. I want a list of users, and their profile information that are members of a group or subgroups. I have several tables, Profile, Principal, Group, GroupGroups, GroupMembers. The ORM expression is

```
q = Profile.objects.filter(
     models.Q(user__principal__groupmember__group__name=group)|
     models.Q(user__principal__groupmember__group__parent__group__name=group)
     )
```

And the resulting SQL, which looks frightening, but appears to scale well on a populated DB is.

```
SELECT * FROM "user_profile"
    INNER JOIN "auth_user"
       ON ("user_profile"."user_id" = "auth_user"."id")
    INNER JOIN "permission_principal"
       ON ("auth_user"."id" = "permission_principal"."user_id")
    INNER JOIN "user_groupmember"
       ON ("permission_principal"."id" = "user_groupmember"."principal_id")
    INNER JOIN "auth_group"
       ON ("user_groupmember"."group_id" = "auth_group"."id")
    LEFT OUTER JOIN "user_groupgroups"
       ON ("auth_group"."id" = "user_groupgroups"."child_id")
    LEFT OUTER JOIN "auth_group" T7
ON ("user_groupgroups"."group_id" = T7."id")
    WHERE ("auth_group"."name" = ? OR T7."name" = ? )
    ORDER BY "user_profile"."search" ASC LIMIT 25'
```

Job done, 1 query for the feed paged and sorted, 7ms on a populated DB.
