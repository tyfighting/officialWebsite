import request from '../utils/require';

export function business(query){
    return request({
        url: `manager/official/list.do`,
        method: 'get',
        params: query
    })
}