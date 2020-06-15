Nmap:

	• nmap 10.0.0.0-15 -v
	• nmap scanme.nmap.org -v
	• nmap -sP 192.168.0.0/24 -oN file.txt
	• nmap 10.0.0.0/24 --exclude 10.0.0.1,10.0.0.2

Scan of services:

	• nmap 10.0.0.0-15 -sV
	• nmap 10.0.0.0-15 -sV --version-light
	• nmap 10.0.0.0-15 -sV --version-all

OS detection:

	• nmap 10.0.0.0-15 -O -v -p80
	• nmap 10.0.0.0-15 -O -v -osscan-limit
	• nmap 10.0.0.0-15 -O -v -osscan-guess

OS detection, versions, scripts, traceroute:

	• nmap 10.0.0.0-15 -A

Scripts:

	• nmap 10.0.0.0 -sC -v
	• nmap scanme.nmap.org --script default -v
	• nmap scanme.nmap.org --script "http-*" -p80 -v
	• nmap scanme.nmap.org --script "not dos" -p80 -v
	• nmap --script-updatedb 
	
Scenario:

	• nmap 10.0.0.0 -p21
	• nmap 10.0.0.0 -p21 -sV
	• Locate "*vsftp*.nse"
	• nmap 10.0.0.0 -p21 --script ftp-vsftp-backdoor