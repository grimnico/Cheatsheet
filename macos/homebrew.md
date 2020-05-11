Brew:

	# List all the installed formulae.
	- brew list
	
	# Display all locally available formulae for brewing.
	- brew search
	
	# Perform a substring search of formulae names for brewing.
	- brew search <text>
	
	# Display information about the formula.
	- brew info <formula>
	
	# Install the formula.
	- brew install <formula>
	
	# Uninstall the formula.
	- brew uninstall <formula>

Brew cask:

	# Add the Cask repository from Github.
	• brew tap homebrew/cask
	
	# List all the installed casks .
	• brew cask list
	
	# Search all known casks based on the substring text.
	• brew search <text>
	
	# Install the given cask.
	• brew cask install <cask>
	
	# Reinstalls the given Cask
	• brew cask reinstall <cask>
	
	# Uninstall the given cask.
	• brew cask uninstall <cask>

Clean up:

	# Remove older versions of installed formulae.
	• brew cleanup
	
	# Remove older versions of specified formula.
	• brew cleanup <formula>
	
	# Display all formula that will be removed (dry run)
	brew cleanup -n