'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');

class WALLC_S_V2 extends ZwaveDevice {

  onNodeInit() {
    this.registerCapability('measure_battery', 'BATTERY');

    // Registering flows
    this._sceneFlowTrigger = this.driver.sceneFlowTrigger;

    this.registerReportListener('CENTRAL_SCENE', 'CENTRAL_SCENE_NOTIFICATION', report => {
      if (report
        && report.hasOwnProperty('Scene Number')
        && report.hasOwnProperty('Properties1')
        && report.Properties1.hasOwnProperty('Key Attributes')
      ) {
        if (report['Scene Number'] <= 4) {
          this._sceneFlowTrigger.trigger(this, null, { button: report['Scene Number'].toString(), scene: report.Properties1['Key Attributes'] })
            .catch(this.error)
            .then(this.log);
        }
      }
    });
  }

  sceneRunListener(args, state) {
    return (state
      && state.hasOwnProperty('button')
      && state.hasOwnProperty('scene')
      && args.hasOwnProperty('button')
      && args.hasOwnProperty('scene')
      && state.button === args.button
      && state.scene === args.scene);
  }
}

module.exports = WALLC_S_V2;