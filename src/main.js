import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'

// Install Vuetify
Vue.use(Vuetify);
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

new Vue({
  el: '#app',
  render: h => h(App)
});
