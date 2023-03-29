---
layout: post
title: 'Cambridge OAE: IMS-CP Import Support'
description: ""
date: Mon Aug 15 2011 16:27:15 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/08/15/cambridge-oae-ims-cp-import-support/
categories: "Uncategorized"
hero: ./img/2011-08-add_content.png
---
We have been working hard on IMS-CP at Cambridge. I should qualify that, Yushan Li from Tsinghua University who has been at Caret for the past month has been working hard on implementing IMS-CP import, and I have been causing trouble for him. Still, we have a working implementation of IMS-CP import that is in our "production" branch. It takes an IMS-CP file and during upload, unpacks the Zip file and converts the IMS Manifest into a Sakai Doc structure definition, so that the IMS-CP appears as a Multilevel Sakai Doc within the user library. They can still get to the original Zip file if they want to download it, and they can also use the Sakai Doc anywhere they can use any other Sakai Doc created inside OAE. Resources within the IMS-CP are also unpacked so that relative URLS within pages of the IMS-CP continue to work correctly.

To test this we have been using sample files created by Charles Sturt University from the Sakai CLE Melete Tool. Yushan's graduate studies have including contributing to the new Metadata for Learning Resources standard and working closely with IEEE LOM, so there is now support for IEEE LOM within OAE at Cambridge and we handle some of the cases where the Melete tool exports diverge from the IMS-CP standard.

The following Screen shots show the functionality in action, uploading a content package which is converted on the fly into a Sakai Doc and then re-using that Sakai Doc in a Group. The main modification to the Sakai OAE code base is to deep levels of nesting within a Sakai Doc. Previously Sakai Docs could not nest more than one level deep. We hope to be adding IMS-CP export shortly, and then moving on to IMS-CC Import and Export. All of these features have been on the Nakamura Roadmap for almost two years now so is nice to see them being implemented, and we are very fortunate to have someone as knowledgable as Yushan doing this work.

![](/img/2011/08/add_content.png)

![](/img/2011/08/select_ims_cp_from_local_disk.png)

![](/img/2011/08/ims_cp_in_library_as_sakaidoc_after_upload.png)

![](/img/2011/08/view_ims_cp_as_content_item.png)

![](/img/2011/08/embed_existing_ims-cp_as_sakai_doc.png)

![](/img/2011/08/ims_cp_pages_in_group.png)
