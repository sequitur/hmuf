import Vue from 'vue';
import ship from './ship.vue';

import './styles.less';

Vue.config.debug = process.env.NODE_ENV !== 'production';

const Ship = Vue.extend(ship);
let currentShip = new Ship();

const app = new Vue({
  el: 'body',
  replace: false,
  template: `
  <div class="container">
    <div class="row">
      <div class="title twelve columns">
        <h1>Her Majesty's Unending Fleet</h1>
        <p class="subtitle">
          A catalogue of HRM's Vessels & Curiosities
        </p>
      </div>
    </div>
    <div class="controls row">
      <div class="twelve columns">
        <button v-on:click="newShip">View Another Ship</button>
      </div>
    </div>
  </div>
  `,
  methods: {
    newShip () {
      const newShip = new Ship();
      newShip.$mount().$after(currentShip.$el);
      currentShip.$destroy(true);
      currentShip = newShip;
    }
  }
});

currentShip.$mount().$before('.controls');
