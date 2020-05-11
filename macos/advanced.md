## Low privileges actions:

	osascript -e 'set volume 7' (modify volume to maximum, 0 for minimum)

	open https://www..... (open a link)
	
	open -a ApplicationName (launches an app)
	open -a ApplicationName --hide (launches an app hidden)
	open Downloads/Instructions.doc -a TextEdit (open a file in one application)

## Computer talk:

	say hello -v diego
	
	spanish: diego, Jorge, Monica
	mexican: Juan, Paulina
	french: Thomas, Amelie

## High privileges actions:

	sudo purge (purge RAM)

## Network interface:

	networksetup -listallhardwareports (list)
	networksetup -setairportpower en0 on (on/off)
	networksetup -setairportnetwork en0 SSID PASSPHRASE (connect to network)
	networksetup -removepreferredwirelessnetwork en0 SSID (remove a profile)
	networksetup -removeallpreferredwirelessnetworks en0 (remove all profile)

## Sharing preferences:

	sudo launchctl load -w /System/Library/LaunchDaemons/ssh.plist (enable ssh)
	sudo launchctl unload /System/Library/LaunchDaemons/ssh.plist (disable ssh)

## Sleep function:

Computer don't sleep when activated:

	caffeinate &
	
Add an ampersand (&) to the end of the argument so that the command runs in the background. Using & allows us to continue to use the terminal while the caffeinate command runs in the background.

To prevent the display from sleeping, use caffeinate -d. To prevent the system from idle sleeping, use caffeinate -i. If you want to prevent the disk from going idle then you want to use the “caffeinate -m” command.

Finally, and this one is particularly useful for laptop users, if you want keep your system awake while it is plugged into AC power, use caffeinate -s.

## Start apache:

	sudo apachectl (start|status|restart|stop)

## Web folder:

	/Library/WebServer/Documents/
	
## Remove DNS cache:

	dscacheutil -flushcache
	sudo killall -HUP mDNSResponder

## ARP tables:

The arp command can be used to print the macOS device's ARP table and discover devices on the network without performing a single Nmap scan. (passive)

	arp -i en0 -l -a

The -i argument is used to specifies the Wi-Fi interface while -l prints the output data in a more human-readable format. To print all of the ARP table entries, use the -a argument.
	
## Check PORT used:

	lsof -i -P -n
	lsof -i -P -n | grep LISTEN

## System information:

	date
	cal
	uptime (show time from starting)
	w (list users)
	whoami (this user)
	finger username (info about user)
	uname -a (sysinfo)
	cat /proc/cpuinfo (processor)
	cat /proc/meminfo (memory)
	free (check memory)
	df (check disk)

## System profiler:

	system_profiler --help

This command without arguments take lot of memory and time.

Use this command to list all data types:

	system_profiler -listDataTypes

Then just execute the commands you need, here an example with two different command in one time:

	system_profiler SPSoftwareDataType SPNetworkDataType

## Connect through SSH:

	ssh nicolasgrimonpont@192.168.0.116 (need password)
