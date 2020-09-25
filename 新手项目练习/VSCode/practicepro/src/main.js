import Vue from 'vue'
import App from './App'
import router from './router'         //这里引入router文件夹下面的index.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
