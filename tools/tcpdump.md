# Useful `tcpdump` commands

### TCPDUMP Cheat Sheet
* [TCPDUMP Cheat Sheet](http://packetlife.net/media/library/12/tcpdump.pdf) is a good resource (I also have a local copy in this repository)

### TCP traffic on port 80-88
`tcpdump -nvvX -sO -i ethO tcp portrange 80-88`

### Capturing traffic to specific IP address excluding specific subnet
`tcpdump -I ethO -tttt dst ip and not net 10.10.10.0/24`

### Capturing traffic for a specific host
`tcpdump host 10.1.1.1`

### Capturing traffic for a specific subnet
`tcpdump net 10.1.1`

### Capturing traffic for a given duration in seconds
`dumpcap -I ethO -a duration: sec -w file myfile.pcap`

### Replaying a PCAP
`file2cable -i ethO -f file.pcap`

### Replaying packets (to fuzz/DoS)
`tcpreplay--topspeed --loop=O --intf=ethO pcap_file_to_replay mbps=10|100|1000


-------

# alex <AlexBujduveanu>

###############
# Basic Usage #
###############

#Capture packets on a particular interface (eth0)
#Note that tcpdump (without the '-i eth0') is also valid if you are only using one interface
tcpdump -i eth0

#Capture packets with more detailed output
tcpdump -i eth0 -nnvvS

#Display captured packets in both HEX and ASCII format
tcpdump -XX -i eth0

#Write captured packets into a file (can be read by tools such as Wireshark, Snort, etc)
tcpdump -w yourfilename.pcap -i eth0

#Read packets from a saved packet capture file
tcpdump -tttt -r yoursavedfile.pcap

#Display IP addresses instead of hostnames when capturing packets
tcpdump -n -i eth0

#Capture packets from a particular source/destination IP address
tcpdump src 192.168.1.1
tcpdump dst 192.168.1.1

#Capture packets from a particular source/destination port number
tcpdump src port 53
tcpdump dst port 21

#Capture an entire network's traffic using CIDR notation
tcpdump net 192.168.1.0/24

#Capture traffic to or from a port
tcpdump port 3389

#Display captured packets above or below a certain size (in bytes)
tcpdump less 64
tcpdump greater 256


##################
# Advanced Usage #
##################

#More complex statements can be formed with the use of logical operators: and(&&), or(||), not(!)
#Examples:

#Capture all traffic from 192.168.1.10 with destination port 80 (with verbose output)
tcpdump -nnvvS and src 192.168.1.10 and dst port 80

#Capture traffic originating from the 172.16.0.0/16 network with destination network 192.168.1.0/24 or 10.0.0.0/8
tcpdump src net 172.16.0.0/16 and dst net 192.168.1.0/24 or 10.0.0.0/8

#Capture all traffic originating from host H1 that isn't going to port 53
tcpdump src H1 and not dst port 22

#With some complex queries you may have to use single quotes to ignore special characters, namely parentheses 
#Capture traffic from 192.168.1.1 that is destined for ports 80 and 21
tcpdump 'src 192.168.1.1 and (dst port 80 or 21)'