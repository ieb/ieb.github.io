---
layout: post
title: 'Jackrabbit Observation'
description: ""
date: Thu Mar 19 2009 16:02:30 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/03/19/jackrabbit-observation/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Not Observation as in the ObservationManager sense, but an observation about JCR and Jackrabbit that has been confusing me and still is. If I put access control on JCR, I dont get notification of an access control failure untill I try and save an item or if in a transaction at the commit (need to check that). This means that the failure doesnt happen in the code where the problem is. I am not certain that is right since, given a permission denied on save you might take alternative action, but if you have to wait until the end of the transaction... how can you ?

A second thing that is consuming a certain abount of my free thought cycles at the moment is the issue of locking. I would have thought, opening a transaction and adding a node in the tree would lock the parent not until the transaction had been committed. However this does not appear to be the case. Does this mean that I have to explicitly lock parent nodes or nodes on modification, if so... what a pain... is there is a better way ?
