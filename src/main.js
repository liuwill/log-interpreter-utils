// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/theme.scss'
import './styles/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

import './lib/user'

if (_GLOBAL_CONFIG && _GLOBAL_CONFIG.version) {
  console.log(`💡log-interpreter-client \nAuthor: ${_GLOBAL_CONFIG.author}<${_GLOBAL_CONFIG.email}> \nBuild: @${_GLOBAL_CONFIG.currentTime} \nVersion:${_GLOBAL_CONFIG.version}`)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
