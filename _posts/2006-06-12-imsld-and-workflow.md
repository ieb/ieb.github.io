---
layout: post
title: 'IMS-LD and Workflow'
description: ""
date: Mon Jun 12 2006 09:53:44 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/06/12/ims-ld-and-workflow/
categories: "Thought, workflow"
hero: ../../../defaultHero.jpg
---
There has been a thread on sakai-pedagogy on Learning Design sparked by Mark Norton. This discussion triggered a long held thought, that IMS-LD is a specialized form of workflow that could be implemented and enacted in a generic workflow environment. I dont know how true this is, or if there is a sufficiently complete mapping to make this possible, but experimentation will help us discover if this is the case.

I am in the process of writing a lightweight workflow engine that does not specify or bind to anything that is available as part of the Sakai framework. The intention being, to provide those services using components from the Sakai framework. This workflow service will not use any heavy weight components (eg EJB's) and so will not require JBoss or another EJB container.

Currently I think that it will be possible to instance a process by loading an XML definition, potentially embedded inside an IMS-CP, that will manipulate and control items on the Sakai Entity bus. (ie content, messages, tools etc). Once instances, a process design, becomes an instance of a Runtime Entity and manages its own state, storing what it needs to inside its own state persistence service. The workflow service will understand roles in the Sakai context so that it can distinguish between users in different roles. It will have the concept of time, allowing the process flow of a Runtime Entity to pause and restart at the command of the user or by design of the process.

The closest workflow standard that has these concepts is the Workflow Management Coalitions XPDL standard, which we \*may\* use as the native expression of the workflow definition. Whichever definition format is used, there will be java code to load those definitions into the internal object model of the process.

One of the tasks that needs consideration, is the transformation and loading of IMS-LD into an XPDL like workflow service. Not knowing enough about IMS-LD at present, I don't know exactly where all the gaps are.

At this point you might be thinking, why havent I mentioned IMS-SS, SCORM2004 or BEPL. IMS-SS and SCORM2004 which contains IMS-SS are a more specialized form of workflow which potentially constrains the learner further. BPEL is a machine-machine workflow, suitable to implementing black box functionality, but not suitable for interacting with a Human. BPEL is ideal for specifying the activities that a XPDL based workfloe might control.
