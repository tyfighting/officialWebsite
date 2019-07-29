import Vue from 'vue'
import Vuex from 'vuex'
//安装持久化存储插件，存储vuex
import createPersistedState from 'vuex-persistedstate'
import User from '../store/modules/user'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        user:User,
    },
    plugins:[
        createPersistedState({
            storage: window.sessionStorage
        })
    ]
})