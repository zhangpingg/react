/*
 * @Author: zhangping
 * @Date: 2023-11-22 16:34:26
 * @Description: 客户抽奖api
 */

import request from '@/libs/request';

// 微信公众号授权登录
export const apiWxAuthLogin = (data) => {
    return request({
        url: '/api/kunpeng/wx/public/zcckj/auth/login',
        method: 'post',
        params: data,
    });
};
