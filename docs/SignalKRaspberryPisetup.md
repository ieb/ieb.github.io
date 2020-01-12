
# Pi Setup onboard a Pogo1250.

This details the setup for a Pi running signalK with Prometheus and Grafana, so the next time I have to do it, I have notes.

The original setup worked well for 3 years until the micorSD card which was supposed to be 7G was actually 4G (fake card from CN via ebay).
The symptoms were every time I rebooted it was like nothing had happened. However it worked just fine for 48h at sea with everything written
fitting in 1GB of ram with space to spare for running Prometheus, Grafana and the SignalK server processing CAN Bus messages from a reasonably
populated Raymarine NMEA2000 bus.


# Setup

The Pi takes ActiSense messages from an Auduino Due via serial port. There is a i2c RCT DS3231 for time and a BME280 to capture pressure, temp, humidity. Same code also works with a BMP280 without the humidity. On the 1 wire interface there are several DS18b20 temperature sensors. The Pi is powered by a Buck converter adjusted to  5.18v, with a current limit of 3A @ 5.1v via the 5V GPIO pins. Input has been tested in the  11.8->15v range, since onboard batteries may go that low, and the charging systems go upto 15v. 5.1v is connected to the Pi via the header. 2x5v pins are used and 2xGND pins are used to power to reduce the risk of volate drop, since if the Pi detects voltage drop it will lower the CPU speed. Even with the official 240v -> 5v connected via micro USB sees lov voltage warnings on startup, probably due to the size of the USB connectors. The hard wired connection does not see any low voltage warnings.

The Due is powered on Vin with 12v with additional capacitors on the input. The CAN transevers are MCP2562 on both Due CAN pins although only 1 is currently used. The other was intended to connect to a VolvoPenta D2-40 as the instuments are CAN Bus, however there is so
little information on the D2-40 bus it wasnt worth it. More notes on the Can setup in [CANBus-and-NMEA200Notes](CANBus-and-NMEA200Notes.md)

There may be slight voltage differences between the Arduino USB and the Pi USB, inspection of the schema indicates the Pi is protected from backpowering via its USB.

The Pi is a 3B because it is powerful enough and cold enough to be in a IP67 box with no fan. I may a heat transfer mechanism to extract heat from the box (ie external Au heat sinks internal and external to transfer heat out the box.)

# OS Confiuration

* Using a quality microSD card (this time).
* Rasbain Desktop downloaded from [here](https://www.raspberrypi.org/downloads/raspbian/) following the [installation instructions](https://www.raspberrypi.org/documentation/installation/installing-images/README.md)
* Setup with mostly defaults, login to console, startx to start desktop if required.

## RTC 

* RTC configured as per (Adafruit)[https://learn.adafruit.com/adding-a-real-time-clock-to-raspberry-pi/set-rtc-time]
* i2cdetect -y 1, configure boot/config.txt with dtoverlay=i2c-rtc,ds3231, reboot
 
      sudo apt-get -y remove fake-hwclock
      sudo update-rc.d -f fake-hwclock remove
      sudo systemctl disable fake-hwclock

* edit /lib/udev/hwclock-set

      #if [ -e /run/systemd/system ] ; then  
      # exit 0 
      #fi
    
      ...
      #/sbin/hwclock --rtc=$dev --systz --badyear
      ...
      #/sbin/hwclock --rtc=$dev --systz
      
* date
* sudo hwclock -w
    
## Node

Downloaded from [https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-armv7l.tar.xz](https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-armv7l.tar.xz) into /opt/node-v12.14.1 symlink /usr/local/bin etc

## Prometheus

as per [https://github.com/ieb/signalk-prometheus-exporter#setup-on-a-pi](https://github.com/ieb/signalk-prometheus-exporter#setup-on-a-pi)

## Grafana 

as per [Grafana install](https://grafana.com/grafana/download?platform=arm)


      sudo apt-get install -y adduser libfontconfig1
      wget https://dl.grafana.com/oss/release/grafana_6.5.2_armhf.deb
      sudo dpkg -i grafana_6.5.2_armhf.deb
      
load [Node Exporter dashboard](https://grafana.com/grafana/dashboards/11074) edit this one and [Prometheus Benchmark Dashboard](https://grafana.com/grafana/dashboards/9761).
add Signalk dashboards (need to get into git somewhere)

## Network

Default setup of the network is a standard Wifi. Onboard at sea with no internet it needs to be an AP as per [Raspbery Pi Doc](https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md)
using 2 versions of /etc/dhcpcd.conf, one for Wifi client, one for AP its possible to switch between the 2

## SignalK Node server

Taken from git master with most modules addred by npm directly from git (ie npm install github:ieb/signalk-enviro). Setup runs from the git checkout itself, not as per the official release. Systemd starts the server on boot. Additional modules to add. Most of these are not released to npm since they are under constant development, and its too painfull to always be releasing (and would probably break anyone who was foolish enough to depend on this code ;) )

* signalk-temperature
* signalk-enviro
* sailinginstruments
* signalk-performance
* signalk-eink
* signalk-prometheus

There have been problems with the support of the ic2 bus in node with some dependent modules being abandoned. The current setup has been patched to work with node v12, but I almost expect there to be more breakages if a differnt version of node is used. v12 is LTS so should be ok for a while.

## Bluetooth LE sensors - Work in progress

Running wires through a boat is a pain. Hence I am building some ESP32 modules which are low cost, low power embedded processors with Bluetooth LE, Wifi, i2c, CAN, ADC, SPI and 2O or so GPIO pins all on a 5x3cm board for 5 GBP from ebay. Programming is via Arduino IDE (or lua, or JS). The aim will be to build a Bluetooth LE SignalK server module to take messages from these modules distributed about the boat measuring whatever they needto. If there is 12v available, they can run from 12v, if not battery+solar. Power consumption while sleeping is in the uA range and Bluetooth LE will allow the units to sleep between measurements. Thats the plan, more later.




