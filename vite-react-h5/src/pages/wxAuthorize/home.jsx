/*
 * @Author: zhangpinig
 * @Date: 2024-08-27 10:01:02
 * @Description: 首页（授权后的页面）
 */

import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { wx } from '@/libs/wx.js';
import { wxAuthLoginByBase } from '@/libs/wx.js';
import { getUrlQuery } from '@/libs/util';

const Index = () => {
    const { state } = useLocation();

    // 扫码
    const scanCode = () => {
        wx.scanQRCode({
            needResult: 1,
            scanType: ['qrCode', 'barCode'],
            success: (res) => {
                console.log('扫码结果', res.resultStr);
            },
            cancel: (res) => {
                console.log('用户取消扫描', res);
            },
            fail: (res) => {
                console.error('扫描出错:', res);
            },
        });
    };
    // 重新授权
    const againAuthorize = () => {
        wxAuthLoginByBase('/customerLottery-authorize', {
            pathname: window.location.pathname,
            ...getUrlQuery(),
        });
    };

    useEffect(() => {
        console.log('home-state', state);
        console.log('url', getUrlQuery());
    }, []);

    return (
        <div>
            首页
            <a onClick={scanCode}>扫一扫</a> <br />
            <a onClick={againAuthorize}>重新授权</a>
        </div>
    );
};

export default Index;
