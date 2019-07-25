import Vue from 'vue'
import Router from 'vue-router'
const Index=()=>import('@/components/index/index')
const Login=()=>import('@/components/login/login')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
