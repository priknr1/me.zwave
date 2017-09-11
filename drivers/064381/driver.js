"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/567

module.exports = new ZwaveDriver(path.basename(__dirname), {
		debug : false,
		capabilities : {
			'onoff' : {
				'command_class' : 'COMMAND_CLASS_SWITCH_MULTILEVEL',
				'command_get' : 'SWITCH_MULTILEVEL_GET',
				'command_set' : 'SWITCH_MULTILEVEL_SET',
				'command_set_parser' : function (value) {
					return {
						'Value' : value ? 'on/enable' : 'off/disable',
						'Dimming Duration' : 1
					}
				},
				'command_report' : 'SWITCH_MULTILEVEL_REPORT',
				'command_report_parser' : function (report) {
					return report['Value (Raw)'][0] > 0;
				}
			}			
		},
		settings : {
		"led_mode": {
			"index": 1,
			"size": 1,
		},
		"switch_off_after": {
			"index": 2,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			},
		},
		"RF_off_command": {
			"index": 3,
			"size": 1,
		},
		"restore_state_power": {
			"index": 5,
			"size": 1,
		}
	}
	})