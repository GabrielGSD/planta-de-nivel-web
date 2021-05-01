import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import VueCharts from 'vue-chartjs'

Vue.config.productionTip = false

Vue.prototype.$api_url = "http://localhost:5000/"

new Vue({
  vuetify,
  router,
  VueCharts,
  render: h => h(App),
}).$mount('#app')