import Vue from 'vue'
import App from './App.vue'
import './common/css/main.css';
import BootstrapVue from 'bootstrap-vue'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'
import router from "./routers/router"
import {post,fetch,patch,put} from './common/js/http'
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
