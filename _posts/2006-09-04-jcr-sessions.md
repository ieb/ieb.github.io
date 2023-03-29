---
layout: post
title: 'JCR Sessions.'
description: ""
date: Mon Sep 04 2006 21:45:46 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2006/09/04/jcr-sessions/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
I had thought with the structure of JCR that it would be a good ideal to open and attach one session to each request thread, avoiding the session creation mechanism. Before you think that this is totally daft, remember that the JCR persistence manager in Jackrabbit manages persistence for the entire JVM. So a managed session attached to the request thread is not so dumb.... well, perhaps, except that if anything goes wrong with the session, that state persists with the session to the next request. The interesting bit is that the error hangs around until and eden GC collection cycle takes place.... at which point any objects that were left uncommitted in in the session are finalized. If the finalization 'rollsback' the JCR object transaction, the session recovers, but a it looks like everything that was 'committed' after the error state is also rolled back.

In retrospect, creating sessions per request is going to be a better approach. However, its going to need some sort of hook into the request cycle to ensure that the Session is created and destroyed. Lazy construction is ok, but there is no unbind hook at the component level.
