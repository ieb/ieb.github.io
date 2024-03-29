---
layout: post
title: 'Community behaviour and choice of scm.'
description: ""
date: Fri May 15 2009 00:34:28 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2009/05/14/community-behaviour-and-choice-of-scm/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Coming from projects where the community is collaborative in nature, I have often wondered how the management of scm, and committer access influences the nature of the community. I wasn't really certain that it had any impact until I tried something other than svn and cvs. IMHO, cvs is painful in the extreme for widely distributed groups, svn is better but it places some interesting barriers to creativity. With a centrally provisioned repository, personal expression and experimentation is limited. Few take branches to experiment, most work locally until they are willing to share. Developer communities resort to lazy commit consensus and/or tools like the excellent codereview app running on a Google App Engine. The former requiring commit stream discipline and the latter requiring constant searching for approval from fellow committers. So these tools are filling the holes left by a centralized scm in a distributed development environment.

Then there there are the distributed scm's like git. It no surprise that git was written by a benevolent dictator. The model of distributed scm's tempts anyone participating to become a benevolent dictator, with the feeling that the branch they own is the master branch and everyone should follow them. The interesting thing about truly distributed scm's is that although they encourage those thoughts, the dictator is only able to satisfy their megalomaniac tendencies if they are given that power by their collaborators. In a distributed scm, someone has to take responsibility for pulling together the trusted stream of patches. If they do a bad job and don't serve their community, the community can easily switch their allegiances and trust someone else's master branch.

The contributing developer, being part of a community can now create their own local branches to experiment. They can push all their branches early and often to let others see what they are doing. The committer status is dissolved since all developers have commit to their own set of branches. Those upstream become far more diligent in code review, since they now have the tools to perform that review and they generally feel much more responsible for the stream of patches they accept into their code base. The ability to change the core code is no longer embedded in central repository but in the hands of those elected to manage the trusted branch. Unfortunately, good though git is at super fast merged on large sets of commits, I would like to experience what it would be like on the receiving end of 50+ contributors patch streams before volunteering to be a benevolent dictator, especially as most dictators get lynched in the end.
