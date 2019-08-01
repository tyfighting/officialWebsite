export default [
  {
    path: '/',
    name: 'Index',
    component: ()=>import('@/components/index/index')
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('@/components/login/login')
  }
]
