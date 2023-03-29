---
layout: post
title: 'Embedding Nasty Templates, Trick'
description: ""
date: Fri Feb 22 2008 12:38:52 GMT+0000 (Greenwich Mean Time)
redirect_from: 
            - http://blog.tfd.co.uk/2008/02/22/embedding-nasty-templates-trick/
categories: "Thought"
hero: ../../../defaultHero.jpg
---
If you have a template that, becuase of its nature/strucutre/purpose is not valid XML... yes it does happen... (sherlog search snippets), you can insert them into a comment and then a CDATA and retrieve them from the DOM. Yes, HTML comments are in the DOM.

```
   render : function(templateName,contextObject)  {
  			if ( ! Template.templateCache[templateName] ) {
  			 var templateNode = document.getElementById(templateName);
  				 var firstNode = templateNode.firstChild;
  				 if ( firstNode && ( firstNode.nodeType == 8 || firstNode.nodeType == 4)) {
  				 	template = templateNode.firstChild.data.toString();

  				 } else {
  				 	template = templateNode.innerHTML.toString();
  				 }
  				 Template.templateCache[templateName] = TrimPath.parseTemplate(template,templateName);
  			}
  			return Template.templateCache[templateName].process(contextObject);
  	},


```

nodeType 4 is CDATA, and nodeType 8 is a comment. However, IE5 doesn't support the node.data property... so I could just do some regex to strip the CDATA or comment tags from converting the element to text.

Using the approach makes it possible to have valid XHTML even with templates for other formats embedded inside the document
