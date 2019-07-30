import axios from 'axios'
//完整写法：import axios from '../node_modules/axios/dist/axios.js';
import Vue from 'vue'
//完整写法：import Vue from "../node_modules/vue/dist/vue.js";

const Instance=axios.create({
    baseURL:'http://data.xinxueshuo.cn/nsi-1.0/',
    timeout:'12000'
})

Instance.interceptors.request.use(config=>{
    return config;
})
// Instance.interceptors.response.use(response=>{
//     return response;
// })
Instance.interceptors.response.use(resp => {
      let data = resp.data;
      if (Number(data.code) !== 0) {
        alert('网络错误')
        throw new Error(data.msg);
      }
      if(data.data){
        return data.data;
      }
    },
    err => {
      alert('网络错误')
    }
);
export default Instance