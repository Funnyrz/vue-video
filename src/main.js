import Vue from 'vue'
import App from './App.vue'
import './common/css/main.css';
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import {post,fetch,patch,put} from './common/js/http'

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
