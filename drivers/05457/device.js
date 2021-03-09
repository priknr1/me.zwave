'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

// http://devel.pepper1.net/zwavedb/device/18
class Device_05457 extends ZwaveDevice {

  onNodeInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');
  }
}

module.exports = Device_05457;