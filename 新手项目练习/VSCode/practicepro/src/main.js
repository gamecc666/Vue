import Vue from 'vue';
import App from './App';
import router from './router';         //这里引入router文件夹下面的index.js

import {
  Button,
  Row,Col,
  Container,Header,Aside,Main,Footer,
  Link,
  Radio,RadioGroup,RadioButton,
  Checkbox,CheckboxButton,CheckboxGroup
} from 'element-ui';
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Link);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxButton);
Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
