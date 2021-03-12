'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

// http://devel.pepper1.net/zwavedb/device/11
class Device_054375 extends ZwaveDevice {

  onNodeInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY', {
      getOpts: {
        pollInterval: 'poll_interval',
        pollMultiplication: 1000,
      },
    });
  }
}

module.exports = Device_054375;