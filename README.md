# Z-Wave.Me

This app adds support for Z-Wave.Me devices to Homey.
If you like the work, please help me buy a stroller for my future kid :D 
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/en_US/NL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/nl_NL/i/scr/pixel.gif" width="1" height="1">
</form>


Currently supported devices:
* ZME_KFOB 		- keychain
* 064381 		- Plugin switch
* 05439 		- Plugin dimmer
* 064381_Out	- outdoor plugin switch
* WALLC-S_V2 	- Wall controller
* WALLC-S 		- Wall controller
* 054375  		- Built-in switch
* 064394  		- Plugin dimmer
* 064367  		- Built-in blind control
* 054336  		- Built-in dimmer
* 054336Z 		- Built-in dimmer
* 05461   		- Built-in double switch
* 054367Z 		- Built-in blind control
* 054313  		- Built-in switch
* 05431   		- Built-in switch
* 05457   		- Built-in switch


Currently supported languages:
* English
* Dutch (Nederlands)
* German (Deutsch) - On a couple of devices


Changelog:

0.1.5
Added missing settings in driver for 064381 and 064381_out

0.1.4
* Syntax error in all driver's settings fixed

0.1.3
* Added product type ID for Outdoor plugin

0.1.1
* Changed repository
* Changed readme


0.1.0
* Added Device 05457 (built in switch)
* Shortend info text for KFOB, WALLC-S and WALLC-S_V2
* Corrected some Default settings for associations

0.0.15
* Added ZME_KFOB Keychain remote

0.0.14
* Changed images for plugin switches and plugin dimmer
* Added 064381_Out Plugin switch outdoor
* Battery status for WALLC-S was linked to WALLC-S_V2 in flow
* Removed 2 driver folders that where not in app.json (remains from older version)

0.0.13
* for WALLC-S: Fixed Send Result to flow and changed typo 
* for WALLC-S_V2: Fixed Send Result to flow and changed typo 

0.0.12
* Fixed Copy/paste error in WALLC-S Driver
* Added support for the WALLC-S_V2 (same as WALLC-S different Manufacturer ID)


0.0.11
* Removed the 05433 device becaus it uses the same device ID als 054336Z
* Added comments to the code to have a beter overview of the used device ID's
* Updated to the newest zwave driver

0.0.10
* Added support for the WALLC-S
* Added 05433 as it seems to be a different device with the same identification information

0.0.9
* Removed double device (05433 - manufacturerId: 100 productTypeId:4096 productId: 9)

0.0.8
* Added support for the 054375
* Added support for the 064394
* Added support for the 064367
* Added support for the 054336
* Added support for the 05433
* Changed wrong link to pictures of 054367Z

0.0.7
* Updated to latest Z-Wave driver

0.0.6
* Added support for the 05458

0.0.5
* Added support for the 054313

0.0.4
* Added basic support for the 054367Z

0.0.3
* Added basic support for the 05461: Dual load switch

0.0.2
* Replaced a couple of icons, fixed a slider issue and removed the tinycolor2 package (since it's not used)

0.0.1
* First version
