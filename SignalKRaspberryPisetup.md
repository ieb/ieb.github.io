
# Pi Setup onboard a Pogo1250.

This details the setup for a Pi running signalK with Prometheus and Grafana, so the next time I have to do it, I have notes.

The original setup worked well for 3 years until the micorSD card which was supposed to be 7G was actually 4G (fake card from CN via ebay).
The symptoms were every time I rebooted it was like nothing had happened. However it worked just fine for 48h at sea with everything written
fitting in 1GB of ram with space to spare for running Prometheus, Grafana and the SignalK server processing CAN Bus messages from a reasonably
populated Raymarine NMEA2000 bus.

# Setup

The Pi takes ActiSense messages from an Auduino Due via serial port. There is a i2c RCT DS3231 for time and a BMP280 to capture pressure, temp
humidity as well as a few DS18b20 1 wire temperature sensors. The Pi is powered from the NMEA2000 cable via a Buck converter feeding 5v into 
the USB on the Pi. The Due is powered on Vin with 12v with additional capacitors on the input. The CAN transevers are MCP2562 on both Due CAN pins
although only 1 is currently used. The other was intended to connect to a VolvoPenta D2-40 as the instuments are CAN Bus, however there is so
little information on the D2-40 bus it wasnt worth it. More notes on the Can setup in [CANBus-and-NMEA200Notes](CANBus-and-NMEA200Notes.md)

The Pi is a 3B because it is powerful enough and cold enough to be in a IP67 box with no fan.

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

Downloaded from https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-armv7l.tar.xz into /opt/node-v12.14.1 symlink /usr/local/bin etc

## Prometheus

as per https://github.com/ieb/signalk-prometheus-exporter#setup-on-a-pi

## Grafana 

as per https://grafana.com/grafana/download?platform=arm


      sudo apt-get install -y adduser libfontconfig1
      wget https://dl.grafana.com/oss/release/grafana_6.5.2_armhf.deb
      sudo dpkg -i grafana_6.5.2_armhf.deb
      
load [Node Exporter dashboard](https://grafana.com/grafana/dashboards/11074) edit this one and [Prometheus Benchmark Dashboard](https://grafana.com/grafana/dashboards/9761).
add Signalk dashboards (need to get into git somewhere)

## Network

Default setup of the network is a standard Wifi. Onboard at sea with no internet it needs to be an AP as per https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md
using 2 versions of /etc/dhcpcd.conf, one for Wifi client, one for AP its possible to switch between the 2

There is probably more do add here.


