---
layout: post
title: 'Cambridge OAE: Engineering Syllabus Widget'
description: ""
date: Mon Aug 15 2011 16:00:50 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2011/08/15/cambridge-oae-engineering-syllabus-widget/
categories: "Uncategorized"
hero: ./img/2011-08-screen-shot-2011-08-09-at-18-38-03.png
---
For the deployment of OAE at Cambridge we needed and easy way which institutions could embed syllabus information into the Courses and Group pages. The Uniersity of Cambridge has many departments, each of which operates largely autonomously when it comes to the provision of teaching and learning information to its students. The Engineering department, which will be one of the early adopters maintains this information as web pages with a reasonably well defined structure. Other departments may have a simular approach. This widget enables a user to embed content from the Engineering Teaching pages directly into any page within the Sakai OAE instance at Cambridge, simply by selecting the year and lecture from a set of drop downs. The functionality is implemented as a widget using a template configured proxy on the back end. We use Google's Javascript Caja implementation to sanitize the HTML, part of the Sakai Widget API and we parse the html to remove headers and footers. Development for this widget took about 6 hours to complete. No back end functionality was required.

The following sequence of screenshots shows a Sakai Doc being created in a Group, then the inline content widget being added and configured to inline the Lecture information in question.

![](https://ik.imagekit.io/htj4bin8p/2011/08/screen-shot-2011-08-09-at-18-38-03.png)

![](https://ik.imagekit.io/htj4bin8p/2011/08/screen-shot-2011-08-09-at-18-38-22.png)

![](https://ik.imagekit.io/htj4bin8p/2011/08/screen-shot-2011-08-09-at-18-38-35.png)

![](https://ik.imagekit.io/htj4bin8p/2011/08/screen-shot-2011-08-09-at-18-39-02.png)

![](https://ik.imagekit.io/htj4bin8p/2011/08/screen-shot-2011-08-09-at-18-39-09.png)
