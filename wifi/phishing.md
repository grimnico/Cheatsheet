# Wifi Phishing

## Wifiphisher:

Install it with one of this two method:

	- apt install wifiphisher (direct install)

	- git clone https://github.com/wifiphisher/wifiphisher.git (from git repository)
	- cd wifiphisher
	- sudo python setup.py install

Use:

	- wifiphisher --help
	- sudo wifiphisher -i wlan0 (no monitor mode)

	- select the network (from GUI)
	- select 'Firmware Upgrade Page'

After selecting the attack, it will immediately launch. A page will open to monitor for targets joining the network. Wifiphisher will also listen for devices trying to connect to networks that aren't present, and it will create fake versions to lure those devices into connecting.

After a target joins, a pop-up will demand they enter the password.

When the target enters the password, we're notified in the Wifiphisher screen.

## Airgeddon:

	- apt-get install ccze

On your git folder:

	- git clone https://github.com/v1s1t0r1sh3r3/airgeddon.git
	- cd airgeddon
	- sudo bash ./airgeddon.sh

Then from interactive console:

	- Install all missing package manualy if necessary with apt-get install "package name"

	- Select an interface to work with
	- Press 2 and Enter to put your wireless card into monitor mode
	- Next, select option 7 and Enter for the "Evil Twin attacks" menu
	- select option 9 and Enter for the "Evil Twin AP attack with a captive portal."
	- Select the number of the target you wish to attack, and press Enter to proceed to the next screen.
	- Select 2 Deauth aireplay attack
	- No need to spoof MAC address
	- Get a handshake
	- Do a desauthentification attack
	- and continu running the script to the end

Now, if we don't already have a handshake for this network, we'll have to capture one now.

Once the capture process has started, a window with red text sending deauth packets and a window with white text listening for handshakes will open. You'll need to wait until you see "WPA Handshake:" and then the BSSID address of your targeted network. In the example below, we're still waiting for a handshake.

Once you see that you've got the handshake, you can exit out of the Capturing Handshakewindow. When the script asks you if you got the handshake, select Y, and save the handshake file. Next, select the location for you to write the stolen password to, and you're ready to go to the final step of configuring the phishing page.

Set up the phishing page, when someone connect to the fake network you'll get the password.