/*
 * @Author: zhangping
 * @Date: 2023-11-22 16:34:26
 * @Description: 精准选胎api
 */

import request from '@/libs/request';

// 获取-左侧菜单
export const apiTireMenu = (data) => {
    return request({
        url: '/api/haotian/select/tire/left/menu',
        method: 'get',
        params: data,
    });
};
