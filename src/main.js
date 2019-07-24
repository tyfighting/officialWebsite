// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
// import element from './element/index'

Vue.config.productionTip = false;
// Vue.use(element)
import {Carousel,CarouselItem} from 'element-ui'
// Vue.component('el-carousel', Carousel);
// Vue.component('el-carousel-item', CarouselItem);
Vue.use(Carousel)
Vue.use(CarouselItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
