import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import detail from './detail/index'
import inner from './detail/inner'

Vue.use(Router)

const router =new Router({
    mode:'history',
    routes:[...detail,...inner]
})
router.beforeEach((to,from,next)=>{
    const isLogin=store.getters.isLogin;
    if(isLogin==''){
        next();
    }else{
        next('/login');
    }    
})
export default router;