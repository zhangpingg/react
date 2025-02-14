/*
 * @Author: zhangpinig
 * @Date: 2024-08-27 10:01:02
 * @Description: 授权页
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUrlQuery } from '@/libs/util.tool';
import { apiWxAuthLogin } from '@/api/customerLottery';

const urlParams = getUrlQuery('code');
const { pathname, ...rest } = urlParams.state && JSON.parse(urlParams.state);

const Index = () => {
    const navigate = useNavigate();

    // 微信授权登录，获取token，是否绑定手机号登信息，并跳转到不同的页面
    const wxAuthLogin = async (code) => {
        const { data } = await apiWxAuthLogin({ code });
        const { authorizationToken, bindMobileBizCode, haveBindMobile } = data;
        localStorage.setItem('wx-auth-token', authorizationToken);
        const searchParams = new URLSearchParams(rest);
        navigate(`${pathname}?${searchParams.toString()}`, {
            state: {
                bindMobileBizCode,
                haveBindMobile,
            },
            replace: true,
        });
    };

    useEffect(() => {
        //wxAuthLogin(urlParams.code);
    }, []);

    return <div className="fs-14 tac pt-100">登录中...</div>;
};

export default Index;
