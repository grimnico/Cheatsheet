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