---
layout: post
title: 'Workflow Implementation'
description: ""
date: Wed Jun 14 2006 13:42:19 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/14/workflow-implementation/
categories: "Thought, workflow"
hero: ../../../defaultHero.jpg
---
I've resurrected the Workflow implementation that was started at the end of the last JISC VRE project meeting. Wonderful how meetings give you time to think, but leaving it alone for such a long time has done two things. Help me forget what I was doing, and solve the same problems in a different but better way.

The workflow engine is a light weight, in memory engine that has built in transactions and rolls back on failure of any of the activities. Hence in a discrete section of flow it either reaches a steady state or it rolls all the way back to the starting point. The whole operation is contained within a thread and storage transaction manager, this means that the execution engine can explore all the pathways, evaluating or executing all the tasks. Unlike a lamda-calculus approach (XLang, BPML) this avoids the pre determination of an execution route through the discrete segment of workflow. In fact, its rather simple and mirrors some of the execution processes of a multi-threaded CPU. It has an execution stack that winds up and down as the flow pointer traverses the flow pathways. If all goes wrong before the final commit, the storage transaction is rolled back, any XA compliant transaction mangers that took part in the workflow segment are notified and the flow stack, and flow modifications are thrown away leaving the workflow state in the same state as it was before the operation started.

As with other transaction managers, the flow state is attached to the thread and only committed once all is ready to commit. If you think of this in DB terms, this would be characterized as READ_COMMITED. It should also be possible to create SERIALIZABLE mode by synchronizing blocks of the flow.

The one area to watch in this approach is the Business Process Objects (BPO's) that hand of responsibility to no XA compliant components, must ensure that, either the transaction flow passes synchronously into the component, only returning ready for commit when the component is able to do so, or when the component is able to take full responsibility. State modifications that go outside the scope of the transaction cannot be rolled back. An I don't fancy implementing a 'whoaa there, give me my data back, I need to make a change' protocol.
