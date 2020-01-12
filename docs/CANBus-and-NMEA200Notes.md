
# Introduction

This page contains notes on SignalK setup for integrating with Raymarine NMEA2000

# Boards

Currently using an Arduino Due, with the NMEA2000 Arduino libraries for converting Raymarine NMEA2000 to JSON consumed by a SignalK server.
This is using the NMEA2000 arduino libraries unmodified. May switch to a Teensy or ESP32 to reduce size, power, etc.

# Trancievers

Initially used Arduno Mega with MCP2515 and a 5V tranciever MCP2551 but found that the packets were dropped frequently which resulted in a switch 
Arduino Due using the built in Can pins.  Due is a 3.3v board. Tried MCP2551 via level shifters and found that packets still dropped beleived to 
be due to the level shifters. 

Then switched to SN65HVD230 which worked ok sending and recieving to other 3.3v trancevers but I could not get to work on a Raymarine NMEA2000 bus.
Putting a scope on CanH and CanL showed CanH > 3.3v for packets from Raymarine instruments and the CanH from the SN65HVD230 being 3.3v. SN65HVD230
recieving worked, but sending was very unreliable. 

THe [datasheet](http://www.ti.com/lit/ds/symlink/sn65hvd230.pdf) section 11.3.1.3 statees SN65HVD230 is compatible with 5V trancevers. However
it may be that with the lenght of network the 3.3v CanH from the SN65HVD230 was not quite high enough for the 5V trancevers to recieve, and it 
could have been that the 3.3v wasnt quite 3.3v all the time.

Swithched to using MCP2562 with the Vio pin set to 3.3v (logic) and the Vdd set to 5v (Can) which seems to work perfectly 
see [figure 1-2 page 6](http://ww1.microchip.com/downloads/en/devicedoc/20005167c.pdf)



