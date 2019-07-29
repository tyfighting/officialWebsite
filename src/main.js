// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
// import element from './element/index'
import store from './store/index'

Vue.config.productionTip = false;
// Vue.use(element)
import {Carousel,CarouselItem,Button,MenuItem,Menu,Submenu,Dropdown,DropdownMenu,DropdownItem,Divider} from 'element-ui'
// Vue.component('el-carousel', Carousel);
// Vue.component('el-carousel-item', CarouselItem);
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Button)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Divider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
