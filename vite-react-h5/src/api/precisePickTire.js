/*
 * @Author: zhangping
 * @Date: 2023-11-22 16:34:26
 * @Description: 精准选胎api
 */

import request from '@/libs/request';

// 查询满足条件的商品数量
export const apiTireCount = (data) => {
    return request({
        url: `/api/haotian/select/tire/count`,
        method: 'post',
        data,
    });
};
