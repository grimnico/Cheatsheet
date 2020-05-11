# Linux command lines:

http://dmvillan.com/kali-linux-commands-list/

	ifconfig & iwconfig

## Restart WIFI Adaptater:

	service network-manager restart

## Check partition:

	df -h

## Active web server:

	service apache2 start 

## Linux updates:

To begin the update of your Kali Linux system first update the packages index list. Open up terminal and enter:

	sudo apt update -y

	sudo apt-get update -y
	
Next, optionally, display all packages which are scheduled for update:

	sudo apt list --upgradable

At this stage we have an option to upgrade individual packages using apt install PACKAGE-NAME or upgrade all packages at once:

	sudo apt-get upgrade -y

Due to package dependency changes some of the Kali Linux packages might be kept back. 

If this is this case you will be notified by the apt upgrade Linux command at the end of the Kali Linux upgrade process. You may upgrade each kept back package individually using the apt install PACKAGE-NAME command or update all kept back packages at once:

	sudo apt dist-upgrade -y

	sudo apt-get dist-upgrade -y

During your initial system upgrade some of the packages may become obsolete, hence are no longer required. To remove all no longer required Kali Linux packages execute:
	
	sudo apt-get autoremove

## Kali Installation:

Search for kali packages:

	apt-get update && apt-cache search kali-linux

Install kali packages:

	sudo apt update && sudo apt install kali-linux-all

## Install Parirus Theme:

	sudo add-apt-repository ppa:papirus/papirus
	sudo apt-get update
	sudo apt-get install papirus-icon-theme

## List all application:

	dpkg -l
	apt list

## Install Vmware tools:

	sudo apt update && sudo apt full-upgrade -y
	[ -f /var/run/reboot-required ] && sudo reboot -f

	sudo apt install -y --reinstall open-vm-tools-desktop fuse
	sudo reboot

	ln -sf /usr/local/sbin/mount-shared-folders ~/Desktop/mount-shared-folders
	gsettings set org.gnome.nautilus.preferences executable-text-activation 'ask'

## Install Softwares:

	sudo apt-get install git (install git)

## Create alias:

	nano /root/.bash_aliases

## Create a function to update system automaticaly:

	function apt-updater {
		apt-get update &&
		apt-get dist-upgrade -Vy &&
		apt-get autoremove -y &&
		apt-get autoclean &&
		apt-get clean &&
		reboot
	}
	
## Install WIFI driver:

	sudo apt update
	sudo apt install realtek-rtl88xxau-dkms
