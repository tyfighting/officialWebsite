import Vue from 'vue'
import Vuex from 'vuex'
import {login} from '../../api/login'

const getters={//类似于vue的computed
    getStateCount(state){//下方的state
        return state.count+1;
    },
};
const mutations={
    add(state){//下方的state
        state.count+=1;
    },
    reduce(state){//下方的state
        state.count-=1;
    }
};
const actions={//注册actions，类似于vue的methods
    addFun(context){//接收一个与store实例具有相同方法的属性的context对象
        context.commit('add');
    },
    reduceFun(context){
        context.commit('reduce');
    }
};
export default {
    state:{
        count:1
    },
    getters,
    mutations,
    actions
}