---
layout: post
title: 'Why does everyone moan about Volvo Pentas overheating....'
description: ""
date: Wed Jun 03 2026 07:27:39 GMT+0100 (British Summer Time)
redirect_from: 
            - http://blog.tfd.co.uk/2026/06/03/volvo-penta-overheat/
categories: "Core, Thought"
hero: ../../../defaultHero.jpg
---

There are a lot of posts about Volvo Penta raw water pumps failing, causing engines to overheat, in forums. Seems to me far more than any other engine. I have a Volvo Penta D2-40, now about 9 years old, in perfect condition. Serviced regularly an inspected frequently. By myself, its my boat and if its not done right I suffer the consequences. Service mechanics don't as I found out on the first service. Leaks everywhere after that first service.

In the past 9 years I have had one near overheat, and one overheat, last weekend. Both times due to an otherwise good impeller failing to self prime. Why, and why should it need to ? The boat sails at > 10kn in moderate winds, its a Pogo1250, and at that speed, even the slightest air past the impeller will eventually suck the water out of the pump. It should self prime, but what no one tells you is if these rubber impellers, even the special MC97 impellers, run dry for more than a few seconds, they overheat and fail. Fair enough, don't run them dry, but why are there so many posts about the small Volvo Penta engines having raw water failures. I suspect its by design and by instruction.

# Installation instructions

The installation instructions for the D2 series of engines explicitly state the water strainer must be 100 to 400mm above the water line. Other engine manufacturers, eg Yanmar, give no such guidance and have diagrams with the whole intake pipe and strainer to the pump being below the water line. Above the water line means the pump will start dry and run dry if any water has been pulled back due to pressure differences. Speed, waves, anything can act like a pump.

# Impeller installations

Ever official impeller comes with glycerine to lubricate the impeller. Use it, and do not use any oil (not even olive oil) or hydrocarbon lubricant. Neoprene (and probably MC97) is will be damaged by anything not water based. Why use it ? If you don't the impeller will run dry and be damaged on first start, due to that water strainer installed by the boat manufacturer well above the water line.

# Warnings

I would not mind if the engine warned me there was no water. If the exhaust is above the water line, with no water it sounds like a tractor, but by then its too late. Impeller has over heated, cracked, and is probably leaking air even if I stop, re-prime, and restart. 

I could open the engine bay before starting every time to make sure water is present both sides of the pump through the clear hoses.... but I don't.

Back to Yanmar... they have a raw water float sensor on the inlet to the heat exchange. If the flow drops for any reason, that triggers an alarm. Very sensible. Why not Volvo Penta. I asked Google and was told that "Volvo Penta believes that its better to warn owners using temperature sensors". Well isn't that nice, no one at VP ever looked at the temperature curve of an over heating engine. By the time the exhaust temperature triggers an alarm its too late the engine is already over 100C and also firing an alarm and the impeller is destroyed.

These 3 tell me this is by design. Designed to support the service network. Designed to fail using parts with a short service life and catastrophic failure modes.

# How to fix

Last overheat I had happened in one of the largest container ports in Europe. I had to sail to a safe anchorage, solo at the time, under jib only as I had already dropped the main. I draw 3m so can't track over the shallows. The one before I had to sail into the Ramsgate Marina to berth on an outer pontoon through a narrow, shallow channel. With crew that time. Both times the impeller was inspected the weeks before.

## Fix 1

Lower the water strainer so that the strainer fills with water and floods the pump at all times. Yes, there is a risk of flooding the boat if the inlet pipe and strainer get damaged, but I have eyes and don't let leaks drip for long. (almost no bilge on a Pogo1250).

**Update**: This does not work, the F4B pump is above the waterline and so does not self prime. The loop of water in the pump provideds water to prime the pump and pull water in from the sea, however the pump seal must be perfect for this to work reliably.

Rasing the inlet of the water into the strainer does increase the volume of water available, but the anti siphon valve must also be raised to ensure that the it still works and water doesnt siphon into the exhaust system. Carefull alignment is required for this to work.

## Fix 2

Fit a capacitive water level sensor (XKC-Y25-V) on the outside of the air admittance valve to sense and turn off an alarm when there is water present at the highest point. I might also add one just above the pump so that it alarms if the pump is dry stopping the engine from being started, but Fix 1 should address that.

**Update**: This does not work. The XKC-Y25-V is inconsistent sensing wet scum on the inside of the pipe, wire in the pipe and generally being an unrelable alarm mechanism.

Investigating a temperature diserpation sensor, see https://github.com/ieb/FlowSensor which simulations indicate can sense air, still water and flow rates with minimal flow restriction.

## Fix 3

Not sure I will do this, but who decided that a rubber impeller pump was a good idea. They don't self prime reliably. They over heat and they fail silently when they do waiting to cause an overheat. Perhaps a centrifugal pump, with almost no wearing parts below the water line, self primed by the sea would be a better approach.

**Update**: Cant self prime due to the pump being above the waterline. Centrfugal pumps are used on large vessles where the pump is guarenteed to be under water all the time, but not yachts.

The other posts I see a lot are "I never want to have another sailing boat with a Volvo Penta engine in it". I've had 2 in 2 boats. Neither my choice. Marinisation on the MD21-B (Peugeot 504 core engine) was a joke. I changed the first one for a VW Marine engine which was wonderfully engineered, based on the super reliable 1.9D VW Golf core engine, with real engineering care on the marinisation. Almost no metal parts in contact with sea water. O-ring seals everywhere, including the impeller cover. Same capacity as the D2-40. Impeller never failed, was several sizes larger than the puny one in a D2-40 and pumped at 2x the rate.

Don't get me wrong. The build quality on a Pogo1250 is fantastic and the engine installation is also good but this builders cant fix misguided engine installation instructions, and a arrogant attitude to predicting failures. Temperature sensors are too late.

