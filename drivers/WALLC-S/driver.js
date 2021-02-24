'use strict';

const Homey = require('homey');

//http://www.pepper1.net/zwavedb/device/554
//http://products.z-wavealliance.org/products/2110
class WALLC_S_Driver extends Homey.Driver {

  onInit() {
    super.onInit();

    this.sceneFlowTrigger = this.homey.flow.getDeviceTriggerCard('scene-switch');
    this.sceneFlowTrigger.registerRunListener((args, state) => {
      return args.device.sceneRunListener(args, state);
    });
  }
}

module.exports = WALLC_S_Driver;
