---
layout: post
title: 'Contact Tracing with Privacy Built in.'
description: ""
date: Sun Apr 19 2020 10:13:51 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2020/04/19/contact-tracing-with-privacy-built-in/
categories: "Uncategorized"
hero: ../../../defaultHero.jpg
---
Contact tracing is a n squared or more computationally intensive operation when done centrally. It is impossible to do at scale manually, with each operation taking days. For governments to perform it centrally requires citizens give up their rights to privacy, especially when a contract tracing app is being used. And yet, it seems, most central contract tracing apps appear to want to gather all the data centrally. Given the current urgency this will not work and will require months of negotiation. I am not a Politician or a Lawyer, I am an Engineer. As an Engineer this is how I would perform contact tracing.

BlueTooth LE (BLE) measures the signal strength of BLE transmitters and estimates the distance. Each transmitter has a unique ID. Some information, such as make of device, can be derived from the unique ID, but the ID anonymous to the receiver unless it tries to de-anonymise it with a centralised service.

On 20 Feb 2020 I was flying back from Basel to Luton on an EasyJet flight. I was curious about privacy on planes and BLE, so I ran a BLE scanner to who was around me. 100s of BLE transmitters were present. Phones, lots of Apple earpods, some VR headsets but I could see no-one wearing them. The scanner reported distance from me in real time, including when the drinks trolly with its credit card device went down the aisle. Just before the flight took off, 2 Chinese males came on-onboard (the writing on the laptop was Chinese). They both wore face-masks. The younger looked exhausted and slept all the way to London. They were clearly alert to coming into contact with anyone. They sat in their own row and asked someone to move a coat without touching it.

Provided a the BLE UIDs are not stored centrally or parsed they do not create privacy issues. An app for contract tracing would collect all UIDs it sees and record the time period spent under a certain distance and for how long. It would store this data on the phone and never allow it to leave the phone. It might also hash the UID internally before storing it. It would never send any of the data off the phone.

When someone becomes ill, they open the app and say they are ill. The app then asks for permission to send only their ID to a central server. Provided they agree, their BLE UID is sent to the server. The server stores that UID in a list and other apps on other phones download the list.

The phone then does contract tracing. It hashes the UID with its one key and compares the hashed value against the list of hashed values stored. If it finds a match it can inform the owner of the phone.

The central server has a list of UIDs identifying those claiming to be COVID-19 positive (globally 75K/day limited by testing, probably more like 300K/day, see [CSSE](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6) for data). It doesn't have any information on who that person interacted with. It doesn't have the number, distance time or anything. The database on the phone doesnt have UIDs, only hashed versions of the UIDS. It can only check if a UID that is has been given is in the database. It can't tell anyone which UIDs are in the database.

The app does require that the person who claims to be COVID-19 positive is willing to let the central server know. And this does require that the contact tracing app is allowed to capture BLE UIDs in the background, which is is currently not allowed by Apple or Google.

The app relies a lot on trust. Trust that it wont send the UIDs or database to a central server without the explicit permission of the owner of the phone, and to allow that UID to be broadcast to the world. It does therefore have privacy concerns but only at the point of being confirmed as a carrier. Every phone must perform the checks against its database.

How would it be done centrally ?

Centrally, the UID database on the phone would have to be stored centrally. When a confirmed case came it, every contact in that database stored centrally would be notified. This is less computationally intensive. Privacy could be maintained by encrypting the database with a key known only to the phone and released only with the consent of the user. Less broadcasting, but the same requirement to build trust in the the app.

BTW, the are BLE Beacons in many public spaces (shops), so an outbreak location can also be tracked with relative ease, but unless it recorded all visitors, it would not be able to notify. (at least not in the centralised model).

However, technology is not everything. Many infections may happen with no person present as the virus lives on hard surfaces for upto 72h. Something will be better than nothing, but won't be perfect.
