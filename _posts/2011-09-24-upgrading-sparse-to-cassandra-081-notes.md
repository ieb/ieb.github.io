---
layout: post
title: 'Upgrading Sparse to Cassandra 0.8.1 (notes)'
description: ""
date: Sat Sep 24 2011 07:35:57 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/?p=439
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Our GSoC student Aadish has been doing some nice work with Cassandra and the Sparse content system, but the version of Cassandra we are binding to is a bit old. So its time for an upgrade. Thrift is quite particular about versions, especially over the 0.6 boundary with Cassandra 0.7 where things changed a bit. Most notable was the addition of login to the Cassandra instance removing the ketspace parameter from most client calls. Now you use set_keyspace(keyspace) when the client is initialised. The other sensible change was the use of java.nio.ByteBuffer to most of the calls to avoid having to do expensive to byte\[] conversions all over the place. So there are some API changes, not to hard to accomidate.

On the server, the schema xml file that was in 0.6.5 appears to have gone. So I set up my instance with

```
# Start Cassandra in background
bin/cassandra
# get the cli up
bin/cassandra-cli --host localhost
Connected to: "Test Cluster" on localhost/9160
Welcome to the Cassandra CLI.

Type 'help;' or '?' for help.
Type 'quit;' or 'exit;' to quit.

[default@unknown] create keyspace n;
3a5e7580-a8b9-11e0-0000-242d50cf1fb7
Waiting for schema agreement...
... schemas agree across the cluster
[default@unknown] use n;
Authenticated to keyspace: n
[default@n] create column family cn with comparator=UTF8Type and default_validation_class=UTF8Type and key_validation_class=UTF8Type;
54b6ff10-a8b9-11e0-0000-242d50cf1fb7
Waiting for schema agreement...
... schemas agree across the cluster
[default@n] create column family ac with comparator=UTF8Type and default_validation_class=UTF8Type and key_validation_class=UTF8Type;
58053fb0-a8b9-11e0-0000-242d50cf1fb7
Waiting for schema agreement...
... schemas agree across the cluster
[default@n] create column family au with comparator=UTF8Type and default_validation_class=UTF8Type and key_validation_class=UTF8Type;
5b705720-a8b9-11e0-0000-242d50cf1fb7
Waiting for schema agreement...
... schemas agree across the cluster
[default@n] exit;
```
