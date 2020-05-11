Nessus: 

download & activation:

https://es-la.tenable.com/products/nessus/nessus-professional
https://www.mailinator.com

install:

	cd downloads
	dpkg -i Nessus-VERSION.deb

Recon-ng:

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

Others:

	snmp-check 10.1.1.12 -w

Openvas:

	sudo openvasmd --get-users (get users)
	sudo openvasmd --user=admin --new-password=sup3rs3cr3t (change password)
	

Metasploit:

Armitage:

	systemctl start postgresql (start the PostgreSQL Database)
	msfdb init (initialize metasploit database or see metasploit instruction)