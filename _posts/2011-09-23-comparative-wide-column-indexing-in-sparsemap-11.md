---
layout: post
title: 'Comparative wide column indexing in SparseMap 1.1'
description: ""
date: Fri Sep 23 2011 05:07:38 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/09/23/comparative-wide-column-indexing-in-sparsemap-1-1/
categories: "Uncategorized"
hero: ./img/2011-09-screen-shot-2011-09-23-at-13-12-29.png
---
I hate doing comparative tests with databases, as it always generates DB wars. "Why didn't you you this version X where thats fixed ?" or "What about using config z with tweak n?". Sure, fixes come out and databasess need tuning, but if it possible to make very simple table operations go faster on small sets of data...that should be the default OOTB config. This limited test was done on the same piece of non production hardware (a laptop) to see if there was a way of getting round the MySQL 64K limit on rows without impacting performance. The test comes in 2 parts. A table load that loads rows into a wide column table as used by SparseMap which represents the cost of saving an Object in SparseMap, and the second is a set of queries performed once 100K rows are present in the database table. It would have been nice to see how the performance degraded or not over the entire test, but as you will see... that would have taken hours to complete.

The problem with MySQL is that there is a limit to the number of colums you can have in a wide column. The limit is on the total size of the row and in SparseMap, because we dont have a limit on the size of properties, we have to reserve sufficient space to make searching viable which results in relatively wide columns. Hence we can only get about 25 columns into a table. A potential way of circumventing the MySQL 64K row limit is to use a datatype that is not stored in the row, like MySQL text , and then create an index based on the first 255 chars. The MySQL documentation reports that text and varchar are functionally equivalent except that if the column is returned then a temporary on disk table is needed to support a text query. Fortunately Sparse is only interested in the rowid, a varchar(32). Unfortunately, sorting will create the temporary disk table.

## Insert performance

Insert performance degrades on MySQL as the number of rows increases. That degradation is worse fo text fields than varchar fields, but it hardly matters since at 50ms per insert Sakai OAE is going to be unusable on MySQL, as each update operation needs 10s or perhaps 100s of updates to content objects.. Earlier tests showed that there was no difference between KV indexing and wide column indexing with MySQL as the problem was simply transposed. PostgreSQL shows the insert time constant with number of rows. Its impossible to see what that time is from the graph but the inserts between 99000 and 99500 averaged 1.3 ms per row. Its perfectly possible that the degradation in MySQL inserts is due to a fundamental mistake in the table structure, and that will need to be investigated some more, but as it stands insert time is an issue.

[![](https://ik.imagekit.io/htj4bin8p/2011/09/screen-shot-2011-09-23-at-13-12-29.png)

## Query Performance

Query performance was tested on 100K rows after the inserts were completed. A range of queries were performed starting with single select term, no sorting (Q1) through to 5 select terms 2 sorts (Q5S2). The results show that text based columns impact query time significantly, probably because temporary tables are placed on disk, and perhaps the sorts are disk sorts. Its clear that Wide Text columns are not viable as a indexing approach with queries averaging at 1s. Since the average page load in Sakai OAE might need 10-20 of these queries it would probably take between 30 and 40s to load each page. Clearly a non starter.

[![](https://ik.imagekit.io/htj4bin8p/2011/09/screen-shot-2011-09-23-at-13-31-59.png)

Removing the MySQL Wide Text columns from the graph we see that apart from some query start up times MySQL queries are averaging 25-30ms per query and PostgreSQL are sub 5ms per query. Its not clear if the MySQL query cache would make a big difference since the table in question has a high update rate, and I suspect that any query cache would be constantly invalidated.

[![](https://ik.imagekit.io/htj4bin8p/2011/09/screen-shot-2011-09-23-at-13-32-22.png)

As I said, I dislike comparative tests between DB vendors since its almost impossible to compare like with like. However in this test readers should take the PosgreSQL line as what might be an acceptable response and use that to evaluate if the MySQL lines are acceptable. The lines might be changed by version or configuration. I used MySQL 5.1, with a large configuration, and PostgreSQL 9.0 with an out of the box configuration. In all cases the DB instances were empty and performing no other work.

On the basis of these tests, unless the MySQL configuration in SparseMap is fixed, I can't recomend it for a production backend. What I dont know at the moment is, can the schema and table structure be fixed or will it require a MySQL specific indexer to be written.

Just in case I have made a massive mistake here. The MySQL table in question is of the form.

```
create table  cn_css_index ( rid varchar(32) NOT NULL,
            v1 varchar(780), ... v25 varchar(780), 
            primary key(rid)) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
CREATE INDEX cn_css_index_v1 ON cn_css_index (v1(255));
CREATE INDEX cn_css_index_v1 ON cn_css_index (v1(255));
...
CREATE INDEX cn_css_index_v25 ON cn_css_index (v1(255));
```

with queries of the form

```
select rid from cn_css_index where v1 = ? and v15 = ? order by v8;
```

Finally, the series of tests I have been performing over the past few days to verify scaleability may become moot, since I have just enabled near real time search in the Solr component, and provided that can be made to cluster it may be possible to removing indexing from SparseMap for most use cases.
