import request from '../utils/require'

// 登录接口
export function login(query){
    return request({
        url:'user/login.do',
        method:'post',
        params:query
    })
}