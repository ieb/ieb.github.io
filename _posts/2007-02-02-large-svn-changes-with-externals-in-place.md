---
layout: post
title: 'Large SVN changes with .externals in place'
description: ""
date: Fri Feb 02 2007 11:21:18 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2007/02/02/large-svn-changes-with-externals-in-place/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
If you need to make changes to a large source tree with an .externals defining the source tree, (like sakai) it can be a pain, so its better to do it with a script perhapse.

for i in \`find . -name m2-target\` ; do pushd \`dirname \$i\`; echo m2-target > svnsettarget; svn propget svn:ignore | grep -v m2-target >> svnsettarget; cat svnsettarget; svn propset svn:ignore -F svnsettarget . ; rm svnsettarget; popd; done

followed by

for i in \`ls -l | grep "^d" | cut -c45-\`; do pushd \$i; svn commit -m 'Adding ignore for m2-target'; popd; done

Will add to and commit changes to svn:ignore.
