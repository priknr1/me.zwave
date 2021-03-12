'use strict';

const Homey = require('homey');

class POPP_WALLC_Driver extends Homey.Driver {

  onInit() {
    super.onInit();
    this.sceneFlowTrigger = this.homey.flow.getDeviceTriggerCard('scene-switch');
    this.sceneFlowTrigger.registerRunListener((args, state) => {
      return args.device.sceneRunListener(args, state);
    });
  }
}

module.exports = POPP_WALLC_Driver;