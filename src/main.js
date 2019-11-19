import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css' 
import 'element-ui/lib/theme-chalk/index.css'//引入element-ui
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(ElementUI)
import '@/styles/index.scss' // global css
import '@/icons' // 引入icon

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
