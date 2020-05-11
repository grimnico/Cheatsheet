Sniffing:

Wireshark:

	!(ip.addr == 10.0.0.12)
	Statistics => Conversations =>IPv4

Scan:

Arp scan:
	
	arp-scan 10.1.1.0/24

Nmap:

	nmap -sn 10.1.1.12 (default - ping)
	nmap -Pn 10.1.1.12 (no ping - service scan)
	nmap -sP 10.1.1.12/24 (ping icmp - no service - system on (bypass ping filtering))

	nmap -sT 10.1.1.12/24 (service TCP - 1000 ports)
	nmap -sU 10.1.1.12/24 (service UDP- 1000 ports - slower than TCP)

	nmap -sT -p 80,8080 10.1.1.12/24 (services TCP on ports)
	nmap -sT -p- 10.1.1.12/24 (services TCP all ports)
	nmap -sT 10.1.1.12/24 -n (services TCP - no resolution DNS (no detection))
	nmap -sT -Pn10.1.1.12/24 -n --open (open's services TCP - no resolution DNS (no detection))

	nmap -sT 10.1.1.12/24 -n --open -n -Pn -O (open's services TCP - no resolution DNS (no detection) - no ping - OS)
	nmap -sT 10.1.1.12/24 -n --open -n -Pn -sV (open's services TCP - no resolution DNS (no detection) - no ping - versions)
	nmap -sT 10.1.1.12/24 -n --open -n -Pn -sC (open's services TCP - no resolution DNS (no detection) - no ping - scripts)
	nmap -sT 10.1.1.12/24 -n --open -n -Pn -A (open's services TCP - no resolution DNS (no detection) - no ping - OS, versions, scripts, traceroute)

Netcat:

installed on all unix by default (macos, linux), default shell command lines.

	nc -z -v 10.1.1.12 -n
	nc -zvn 10.1.1.12 100-500

DNS:

Manual DNS enumeration:

	dig website.com (get type A)
	dig mx website.com (get type MX)
	dig ns website.com (get type NS)

	host -t axfr website.com
	dig axfr @SERVER-DNS website.com (DNS zone attack)

Auto DNS enumeration:

	dnsenum website.com
	dnsenum -enum website.com

	dnsmap website.com (dictionary DNS resolution)

	fierce -dns website.com (dictionary DNS resolution - bigger)
	
Metasploit:

Scan:

import to metasploit:

	nmap -A 10.1.1.12 -oA basename (output file)
	db_import /root/basename.xml

or run from metasploit:

	db_nmap -A 10.1.1.12 (use nmap command)

	hosts (show results)
	hosts -c address,os_name (filter view)

	services (show services)
	services -c name,info 10.1.1.12 (filter view)
	services -c name,info -S http (filter view, search services)
	services -c name,info -p 4545 (filter view, search ports)
