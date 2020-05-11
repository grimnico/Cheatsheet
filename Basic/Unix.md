# MAC & Linux:

https://explainshell.com/

	- sudo !! (repeat last command like root)

	- pwd (actual route)

	- ls -1 (one column)
	
	- ls -all
	- ls -all > file.txt (record outpout on file)
	- ls -all | grep filter* (filtrar)
	
	- touch file.txt (create file)
	
	- cat file.txt (read content)
	
	- rm file.txt (remove file)
	
	- mkdir (create directory)
	- rm -R (remove directory)

	- history 

	- cp file.txt file2txt (copy)

	- more 

	- ps (servicios)
	- ps -all
	- ps -ax

	- kill UID (kill process)
	- kill -9 UID (force kill process)

	- top (activity monitor)

	- locate finder (search)
	- updatedb

	- whereis dash (search bin)

	- service (list services)
	- service servicename start | status | stop

	- sudo crontab -u nicolasgrimonpont -l (check cron tasks)
	- crontab -l (check cron tasks for this user)

Action to get informations about computer:

	- date
	- cal
	- uptime (show time from starting)
	- w (list users)
	- whoami (this user)
	- finger username (info about user)
	- uname -a (sysinfo)
	- cat /proc/cpuinfo (processor)
	- cat /proc/meminfo (memory)
	- free (check memory)
	- df (check disk) b
	- lsb_release -a (os version)

Scripting:

	- sort -u (check for unique)

Get all IP of web page:

	- wget http://www.cisco.com/
	- grep "href=" index.html | cut -d"/" -f3 | grep "\." | cut -d '"' -f1 | sort -u > dominios.txt
	- for dom in $(cat dominios.txt); do host $dom; done | grep "has address" | cut -d" " -f4
	- for dom in $(cat dominios.txt); do host $dom | grep "has address" | cut -d" " -f4 done > ips.txt
	- cat ips.txt | sort -u

Mailinator

	- check domain on robtex.com and search for "using as mail server"
	- choose one domain and use it like mailinator.com address
	
Check PORT used :

	- lsof -i -P -n
	- sudo lsof -i -P -n | grep LISTEN

