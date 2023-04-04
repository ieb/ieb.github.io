---
layout: post
title: 'Fibonacci ring for Cassandra'
description: ""
date: Wed Oct 10 2012 08:58:01 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2012/10/10/fibonacci-ring-for-cassandra/
categories: "Apache Cassandra, Cassandra, Distributed computing, Fibonacci, Fibonacci number, Linear Congruential Generator, Uncategorized, Vi Hart"
hero: ./img/wikipedia-commons-thumb-d-d0-Protea_flower.jpg-300px-Protea_flower.jpg
---
![King Protea (Protea cynaroides)](https://ik.imagekit.io/htj4bin8p/wikipedia-commons-thumb-d-d0-Protea_flower.jpg-300px-Protea_flower.jpg "King Protea (Protea cynaroides)")

No this isn't a greek tragedy or some software that I have written, but a thought about the way in which Apache Cassandra an other distributed systems perform problem space decomposition. Cassandra is a good example of a distributed system with problem space decomposition. Its problem space is keys. To be efficient it needs to distribute those keys evenly around its cluster. The key partitioning algorithm normally uses something that generates a flat even distribution. A [Linear Congruential Generator](http://en.wikipedia.org/wiki/Linear_congruential_generator) could be used if you are prepared to live with some banding in the problem space. If not and you are prepared to live with a bit more computational expense one of the hash functions like MD5 or SHAx. In fact the standard key distribution functions in Cassandra use something based on MD5, which to my naive mind must have some collisions.

In reading the Cassandra documentation and using it some years back I became concerned about how elastic Cassandra is. The decomposition of Cassandra's key domain is often represented as a ring. That ring is constructed when the cluster is creates and elements are allocated via the key-> ring function, I think they are called partitioners. From reading the documentation, partitioning of this space if fixed and static. If more nodes need to be added to a Cassandra cluster then the partitioning scheme must be updated and data must be migrated from existing nodes in the cluster to their new home before the cluster can become full active again. I think I got that right. That means, although you can replace nodes, you can't elastically scale without partitioning work. I am not absolutely clear if that means the re-partitioning work can be done on a live system, or not. I would hope it can.

That got me thinking. There are other systems that repartition effectively during operation. Algebraic Multigrids used to solve high Reynolds number Eulerian grids repartition to accelerate the solution phase. I wrote a parallel AMG solver to run on Cray T3Ds in 1995. It was fast, efficient with good conversion rates but struggled to beat the Cray vectorised versions of the code base on reasonable sized clusters. There is another. A plant. A plant doesn't shutdown when it adds petals to its flower or leaves to its stem it keeps running (so to speak, I havent seen a running flower since University). The plants domain space that its partitioning is sunlight. As it adds leaves doesn't add leaves as a whole ring, but it adds them one by one to make the most use of the available sunlight without shading other spaces. It doesn't require that the cells from one leaf or petal migrate to the new leaf. In essence a plant has achieved the trick of scaling elastically.

## How does it do this ?

There is a biological explanation associated to levels of hormones in the stem which are triggered by light levels which could be considered to be as adaptive as the AMG solver is, driven by its solution. Stepping back a bit there is an observation often used in math classes. The number of spirals in many plants is observed to be adjacent numbers in the [Fibonacci sequence](http://en.wikipedia.org/wiki/Fibonacci_number "Fibonacci number"), often 8, 13 and 21 but sometimes as high as 144 spirals. There is a [delightful explanation](http://www.khanacademy.org/math/vi-hart/v/doodling-in-math--spirals--fibonacci--and-being-a-plant--1-of-3) of [Pinecones](http://en.wikipedia.org/wiki/Conifer_cone "Conifer cone"), Pineapples, [Protea](http://en.wikipedia.org/wiki/Protea "Protea") and the Fibonacci sequence by [Vi Hart](http://www.youtube.com/Vihart "Vi Hart"), even if you think you have learnt everything, its fun to watch.

## How is this relevant ?

I wonder if a Cassandra ring seeded with an initial space that allowed say 5 partitions, but as those partitions passed a threshold of say 30% (with an even distribution) another partition was added. That new partition would attract new keys without requiring migration of the existing keys ensuring that the original partitions never filled. If successful as new nodes were added in the same way as segments are added to a pineapple the Cassandra cluster could scale elastically, or more elastically than it appears to do currently. That really is just a thought, and I havent written a partitioner yet to see if it would work. I think the partitioner would be based on the the ratio of adjacent numbers in the Fibonacci sequence. ie, the [Golden Angle](http://en.wikipedia.org/wiki/Golden_angle)