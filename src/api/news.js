import request from '../utils/require'

//获取文章列表
export function article(data){
    return request({
        url:'article/list.do',
        method:'post',
        data
    })
}