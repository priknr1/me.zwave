"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/11

module.exports = new ZwaveDriver(path.basename(__dirname), {
		debug : false,
		capabilities : {
			'onoff' : {
				'command_class' : 'COMMAND_CLASS_SWITCH_BINARY',
				'command_get' : 'SWITCH_BINARY_GET',
				'command_set' : 'SWITCH_BINARY_SET',
				'command_set_parser' : value => ({
					'Switch Value': (value) ? 'on/enable' : 'off/disable'
				}),
				'command_report' : 'SWITCH_BINARY_REPORT',
				'command_report_parser': report => report.Value === 'on/enable',
				'pollInterval': 'poll_interval'
			}
		},
		settings : {
		"switch_first_channel_off_after": {
			"index": 2,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"energy_consumption_first_channel": {
			"index": 20,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"switch_second_channel_off_after": {
			"index": 22,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"energy_consumption_second_channel": {
			"index": 40,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		}
	}
	})
