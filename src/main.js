import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'

// Install Vuetify
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

new Vue({
  el: '#app',
  render: h => h(App)
});
