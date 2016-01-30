import Improv from 'improv';
import spec from 'json!yaml!./spec.yaml';

const options = {
  filters: [
    Improv.filters.mismatchFilter(),
    Improv.filters.unmentioned(),
    Improv.filters.partialBonus(),
    Improv.filters.fullBonus(),
    Improv.filters.dryness(),
  ],
  persistence: false,
  reincorporate: true,
};

const shipGen = new Improv(spec, options);

class Ship {
  constructor() {
    this.regen();
  }

  regen() {
    const model = {};
    shipGen.gen('desc', model);
    shipGen.gen('name', model);
    shipGen.gen('class', model);
    shipGen.gen('prefix', model);
    shipGen.gen('commissioned', model);
    shipGen.gen('fate', model);

    Object.keys(model.bindings)
      .forEach(key => this[key] = model.bindings[key]);
  }
}

export default {
  currentShip: new Ship,
  newShip() {
    this.currentShip.regen();
  },
};
