import Vue from 'vue'
import Vuex from 'vuex'
import {login} from '../../api/login'

const defaultState={
    id: '',
    loadTime: '',
    memberSign: '',
    password: '',
    registerType: '',
    unionId: '',
    updateTime: '',
    userOrganization: '',
    userPhone: '',
    userPortrait: '',
    userPosition: '',
    userRegistercode: '',
    userScore: '',
    userTurename: '',
    username: '',
    wechatid: ''
}
const getters={//类似于vue的computed
    isLogin(state) {//下方的state
        return state.info.id
    },
};
const mutations={
    setUser(state,obj){//下方的state
        state.info=obj;
    }
};
const actions={//注册actions，类似于vue的methods
    async login(context,obj){//接收一个与store实例具有相同方法的属性的context对象
        let result = await login(obj);
        context.commit('setUser',result);
        return result;
    }
};
export default {
    state:{
        info:defaultState
    },
    getters,
    mutations,
    actions
}