import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store.js';
import {router} from './routes.js';

import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
