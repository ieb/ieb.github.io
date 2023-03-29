---
layout: post
title: 'Cayenne is a hot pepper, no kidding.'
description: ""
date: Sat Apr 28 2007 14:30:19 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/04/28/cayenne-is-a-hot-pepper-no-kidding/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
So I was getting fed up the the datamodel I am working with, lots of many to many mapping tables, often with a several tables between the real entities. So I looked up flattening with Cayenne.

http://cayenne.apache.org/doc20/flattened-relationships.html`Which looks rather simple, and comming form a Hibernate world with stes one-to-many many-to-many reverse joins there to confuse.

This aspect of Cayene is a little confusing to someone used to complexity. If you define the Database relationships in the mapping file, then you can tell Cayenne the path between the Entities in terms of the Database mappings.

Thats it.

It does the rest. I have 2 distant entites, with 4 mapping tables between them, 5 hops, and from one Class I can do a getRemoteEntityList(); Cayenne converts that into a multi table join acording to the its was conigured with in the mappings and you get the list in one sql statement.

This isnt too far off what we tend to do with hand optimized SQL.

The XML specification of this is quite easy to undertand, just define the path a comma seperated list of relationships, but the GUI mapper is even easier as at every step of navigation, it know what relationships are available and gives you the options to where to go next. If there is only one path its completely automatic, if there is a decision to be made its up to you.

This also works for updates and inserts (I am told), however if there is more than one mapping table, the relationship is read only. If there is one, it will perform all the operations on the intermediate table.`
