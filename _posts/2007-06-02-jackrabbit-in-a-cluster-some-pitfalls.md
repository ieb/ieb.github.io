---
layout: post
title: 'Jackrabbit in a cluster, some pitfalls'
description: ""
date: Sat Jun 02 2007 15:24:40 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/06/02/107/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Although jackrabbit in a cluster does work there are one of 2 issues with the 1.3 code base. There is a small patch that needs to be applied to the CusterNode implementation to make terminate the journal record.

``

```
@@ -637,6 +637,7 @@
record = journal.getProducer(PRODUCER_ID).append();
record.writeString(workspace);
write(record, nodeId);
+                      record.writeChar('�');
record.update();
setRevision(record.getRevision());
succeeded = true;
```

```
see <a href="https://issues.apache.org/jira/browse/JCR-915">https://issues.apache.org/jira/browse/JCR-915</a>
```

After that there is a race condition under load that is a larger patch described in <https://issues.apache.org/jira/browse/JCR-929> which will cause the effective node to hang on requests into the JCR. There are also some other things to note, in MySQL clustered environment, you MUST have InnoDB as the default table type otherwise you will get collisions on the revision number. In addition you must have the transaction issolation set to READ-COMMITTED, and not REPEATABLE-READ otherwise you will not see the changes propagate from one of the nodes to the other.
