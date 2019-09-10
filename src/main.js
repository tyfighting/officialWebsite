import Vue from 'vue'
import App from './App'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'

Vue.config.productionTip = false;
import {Carousel,CarouselItem,Button,MenuItem,Menu,Submenu,Dropdown,DropdownMenu,DropdownItem,Divider,Loading} from 'element-ui'
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
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
