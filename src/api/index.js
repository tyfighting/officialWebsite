import request from '../utils/require';

export function business(query){
    return request({
        url: `manager/official/list.do`,
        method: 'get',
        params: query
    })
}
export function article(query){
    return request({
        url:'article/list.do',
        method:'get',
        params:query
    })
}