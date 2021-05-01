/* eslint-disable */
import Vue from 'vue'
import App from './App'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    vuetify
  },
  template: '<App/>'
})
