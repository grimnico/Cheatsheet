Basic:

	1) Try to get EAPOL packets, this packets contains the handshakes.

	We can change the network scanning channel if we need. (add WI-FI toolbar to change easily)

	2) If you have handshakes, go to preferences, protocols, ieee 802.11 and add tha wpa-psk key in order to decrypt all the traffic for every interface on the network.
	
	3) Scan for DNS request and watch all traffic from computers and smartphones.

	Open statistics, resolved adresses, to show all the DNS resolutions.
	
	4) Search for HTTP request (and POST) and examine packets to find credentials, conversations, etc.

	- http.host == "192.168.0.110:8080"

Sniffing the network:

	- airmon-ng start wlan0
	- airodump-ng start wlan0

Start wireshark on wlan0mon and capture handshakes with one of these two commands:
	
	- aireplay-ng -0 1 -a 00:14:6C:7E:40:80 -c 00:0F:B5:FD:FB:C2 wlan0mon
	- mdk3 wlan0mon

Search on wireshark for desauthentification packets and EAPOL packets and then, continu the "Basic" process of capturing explained before.
