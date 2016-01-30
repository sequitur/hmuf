import Vue from 'vue';
import app from './app.vue';

import './styles.styl';

Vue.config.debug = process.env.NODE_ENV !== 'production';

const App = new Vue({ // eslint-disable-line no-unused-vars
  el: 'body',
  components: {
    app,
  },
});
