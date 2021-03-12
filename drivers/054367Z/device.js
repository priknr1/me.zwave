'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

// http://devel.pepper1.net/zwavedb/device/119
class Device_054367Z extends ZwaveDevice {

  onNodeInit() {
    this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
    this.registerCapability('dim', 'SWITCH_MULTILEVEL');
  }
}

module.exports = Device_054367Z;