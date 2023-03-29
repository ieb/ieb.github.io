---
layout: post
title: 'Sesame in a Clustered environment'
description: ""
date: Sun Jun 04 2006 23:19:07 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/04/sesame-in-a-clustered-environment/
categories: "Search, Thought"
hero: ../../../defaultHero.jpg
---
[Sesame](http://www.openrdf.org "Sesame") has one major advantage in a clustered environment, it stores its content in a database. Im not saying this is good thing, but it just makes it easier to deploy in a clusterd environment where the only thing that is shared is the database. It should be relatively easy to make it work OOTB with Sakai... however, it looks like the default implementation of the Sesame RDBMS Sail driver (this is the RDF Repository abstraction layer) like to get a jdbc url, user name and password. This would be Ok, except that Sakai likes use a Data source.

The solution appears to be to extend various classes within the Sesame core rdbms implementation so that whenever a connection is required it comes from the Sakai data source rather than some separately managed JDBC pool.

Its not clear at the moment is Sesame is scalable enough to handle the potential number of triples that Sakai will generate. The tests of the Lucene part of the search engine were indexing about 5GB of data representing about 100,000 documents. Performance was perfectly acceptable. If the same document set was to put into a triple store, we will see at least 2M triples, and thats before we start to add in any work site ontology beyond the standard Sakai ontology.

If we get to this size of RDF store, we should also consider using [Kowari](http://kowari.org "Kowari Project") but with an entirely native index format we might have to employ similar techniques to those used in the Lucene clustered search to make it work. Alternatively we could look at a dedicated RDF server... although I suspect that this would be too much deployment effort for most users.
