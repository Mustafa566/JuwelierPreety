import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueHead from 'vue-head'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Vuex from 'vuex'
// import 'es6-promise/auto'

// Make BootstrapVue available throughout your project
Vue.use(VueHead)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
