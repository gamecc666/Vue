import Vue from 'vue';
import App from './App';
import router from './router';         //这里引入router文件夹下面的index.js

import {Button,Row,Col} from 'element-ui';
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
