import Vue from 'vue'
import App from './App.vue'
import Api from './api'
Vue.config.productionTip = false
import router from './router'
Vue.prototype.$api = Api
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
