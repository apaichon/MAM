import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
