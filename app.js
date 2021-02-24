"use strict";

const Homey = require('homey');

class ZwaveMeApp extends Homey.App {
	onInit() {
		this.log(`${this.homey.manifest.id} running...`);
	}
}

module.exports = ZwaveMeApp;