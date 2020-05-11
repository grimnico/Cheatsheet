Customize Terminal:

	nano bash_profile

Copy that lines to customize prompt and add colors:

	source ~/.profile
	export PS1="\[\033[36m\]\u\[\033[m\]:\[\033[33;1m\]\w\[\033[m\]\$ "
	export CLICOLOR=1
	export LSCOLORS=ExFxBxDxCxegedabagacad