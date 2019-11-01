import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'
import _ from 'lodash'
// import zhCN from 'vee-validate/dist/locale/zh_CN'
// import VeeValidate, { Validator } from 'vee-validate'

// Vue.use(VeeValidate, {
//   // 配置改变的时候去触发校验，默认是 input
//   events: ''
// })
// Validator.localize('zh_CN', zhCN)
Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false
Vue.prototype._ = _

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
