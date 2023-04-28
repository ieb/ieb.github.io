---
layout: page
title: Notes
permalink: /notes/
---

# Notes

This repo contains notes and documentation mainly related to Sailing and using Signalk. Most of the information is for my own reference and spans many git repos, but it migh be of use for anyone trying intergate SignalK with boat electronics.

# SPAs and data

User at Cowes Week 2018, Marks data may need adjusting for later years. See [https://github.com/ieb/cowes2018](https://github.com/ieb/cowes2018) for source code.

* [Cowes Week 2018 route planner](marks/index.html)
* [Cowes Week 2018 Marks in CSV format](marks/SolentMarksCowesWeek2018.csv)
* [Cowes Week 2018 Marks in JSON format](marks/SolentMarksCowesWeek2018.json)

# Notes

* 65e5899 [ESP32-BLE-OnAPi](ESP32-BLE-OnAPi.md)
* 9358ff1 [CANBus-and-NMEA200Notes](docs/CANBus-and-NMEA200Notes.md)
* 9358ff1 [SignalK Raspberry Pi setup](docs/SignalKRaspberryPisetup.md)

* [mini Lathe thread cutting gear calculator](laith8x16gears.html)


# NMEA2000 Device addresses

List of device addresses burned into firmware to avoid collisions. The code will adapt when there is a collision,
but its better if to avoid this. NMEA2000 is https://github.com/ttlappalainen/NMEA2000, SmallNMEA2000 is https://github.com/ieb/SmallNMEA2000 less capable, but runs on small MCUs.

| Device         | Address | Platform   | Status  | lib           |
|++++++++++++++++|+++++++++|++++++++++++|+++++++++|+++++++++++++++|
| EngineMontor   | 23      | ESP32      | retired | NMEA2000      |
| CanDiagnose    | 50      | ESP32      | dev     | NMEA2000      |
| CanSend        | 22      | ESP32      | service | NMEA2000      |
| WindSensorBase | 24      | ESP32      | retired | NMEA2000      |
| CanPressure    | 25      | Attiny3224 | service | SmallNMEA2000 |
| EngineMonitor  | 24      | Atmel328p  | service | SmallNMEA2000 |
| NMEA2000Shunt  | 26      | Attiny3224 | dev     | SmallNMEA2000 |



