import request from '../utils/require'

// 登录接口
export function login(data){
    return request({
        url:'user/login.do',
        method:'post',
        data
    })
}