import request from '../utils/require';

//获取官网首页内容
export function business(query){
    return request({
        url: `manager/official/list.do`,
        method: 'get',
        params: query
    })
}
