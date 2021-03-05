'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');

// http://devel.pepper1.net/zwavedb/device/567
class Device_05457 extends ZwaveDevice {

  onNodeInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');
    
    // Origanally it was using SWITCH MITLILEVEL command, but 
    // acording to the manual it does not support command class.
    //this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
  }
}

module.exports = Device_05457;