https://explainshell.com/

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
