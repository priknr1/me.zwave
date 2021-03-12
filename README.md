# Z-Wave.Me
This app adds support for Z-Wave.Me devices to Homey.

## Battery powered Wall Controllers
Should you experience problems with the battery powered wall controllers, please replace the battery with a new one. Especcially when placed far away from Home they tent to drain the battery fast.



## Supported devices:
* ZME_KFOB 		- keychain
* 064381 		  - Plugin switch
* 05439 		  - Plugin dimmer
* 064381_Out	- outdoor plugin switch
* WALLC-S_V2 	- Wall controller
* WALLC-S 		- Wall controller
* POPP-WALLC	- Wall controller
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


## Supported languages:
* English
* Dutch (Nederlands)
* German (Deutsch) - On a couple of devices

If you like the SDK3 rewrite, please donate a beer ;) 
<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="Y83NLPXRJRR94" />
<input type="hidden" name="currency_code" value="EUR" />
<input type="image" src="https://www.paypalobjects.com/nl_NL/NL/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Doneren met PayPal-knop" />
<img alt="" border="0" src="https://www.paypal.com/nl_NL/i/scr/pixel.gif" width="1" height="1" />
</form>

## Changelog:
### 0.3.0
* Complete rewrite for SDK3.
* NOTE: that some devices might need to be reincluded to work properly again.

### 0.1.6
* Changes needed for verification (and thus installation) in Homey V2.0

### 0.1.5
* Added missing settings in driver for 064381 and 064381_out

### 0.1.4
* Syntax error in all driver's settings fixed

### 0.1.3
* Added product type ID for Outdoor plugin

### 0.1.1
* Changed repository
* Changed readme

### 0.1.0
* Added Device 05457 (built in switch)
* Shortend info text for KFOB, WALLC-S and WALLC-S_V2
* Corrected some Default settings for associations

### 0.0.15
* Added ZME_KFOB Keychain remote

### 0.0.14
* Changed images for plugin switches and plugin dimmer
* Added 064381_Out Plugin switch outdoor
* Battery status for WALLC-S was linked to WALLC-S_V2 in flow
* Removed 2 driver folders that where not in app.json (remains from older version)

### 0.0.13
* for WALLC-S: Fixed Send Result to flow and changed typo 
* for WALLC-S_V2: Fixed Send Result to flow and changed typo 

### 0.0.12
* Fixed Copy/paste error in WALLC-S Driver
* Added support for the WALLC-S_V2 (same as WALLC-S different Manufacturer ID)


### 0.0.11
* Removed the 05433 device becaus it uses the same device ID als 054336Z
* Added comments to the code to have a beter overview of the used device ID's
* Updated to the newest zwave driver

### 0.0.10
* Added support for the WALLC-S
* Added 05433 as it seems to be a different device with the same identification information

### 0.0.9
* Removed double device (05433 - manufacturerId: 100 productTypeId:4096 productId: 9)

### 0.0.8
* Added support for the 054375
* Added support for the 064394
* Added support for the 064367
* Added support for the 054336
* Added support for the 05433
* Changed wrong link to pictures of 054367Z

### 0.0.7
* Updated to latest Z-Wave driver

### 0.0.6
* Added support for the 05458

### 0.0.5
* Added support for the 054313

### 0.0.4
* Added basic support for the 054367Z

### 0.0.3
* Added basic support for the 05461: Dual load switch

### 0.0.2
* Replaced a couple of icons, fixed a slider issue and removed the tinycolor2 package (since it's not used)

### 0.0.1
* First version
