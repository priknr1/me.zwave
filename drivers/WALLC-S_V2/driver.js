'use strict';

const Homey = require('homey');

//http://products.z-wavealliance.org/products/1086
class WALLC_S_V2_Driver extends Homey.Driver {

  onInit() {
    super.onInit();

    this.sceneFlowTrigger = this.homey.flow.getDeviceTriggerCard('scene-switch');
    this.sceneFlowTrigger.registerRunListener((args, state) => {
      return args.device.sceneRunListener(args, state);
    });
  }
}

module.exports = WALLC_S_V2_Driver;
