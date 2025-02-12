import { Toast } from 'antd-mobile';
import axios from 'axios';
const wx = require('weixin-js-sdk');

const APP_ID = 'wx2cb4f747b9571e96';

/**
 * @description 微信授权登录（base）
 * @param {String} pageUrl 回调的页面路由
 * @param {String } params 页面需要携带的参数
 * 示例：wxAuthLoginByBase('/customerLottery-authorize', { pathname: '/customerLottery-home', state: { a: 11, b: 22 } });
 */
const wxAuthLoginByBase = (pageUrl, params) => {
    let redirectUrl = encodeURIComponent(`${window.location.origin}${pageUrl}`);
    let state = params && JSON.stringify(params);
    let authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APP_ID}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base${
        state ? `&state=${state}` : ''
    }#wechat_redirect`;
    window.location.href = authUrl;
};

// 获取微信的配置参数
const getConfig = () => {
    Toast.show({
        icon: 'loading',
        content: '加载中…',
        duration: 0,
        maskClickable: false,
    });
    let url = window.location.href.split('#')[0];
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `/api/kunpeng/wx/public/zcckj/js/sdk`,
            params: { url },
        }).then(
            (response) => {
                let res = response.data;
                if (res.code === 200) {
                    resolve(res);
                } else {
                    console.log(res);
                    reject(res);
                }
                Toast.clear();
            },
            (err) => {
                reject(err);
                Toast.clear();
            }
        );
    });
};

// 设置-微信配置
async function setWxConfig(shareData) {
    try {
        let { data } = await getConfig();
        wx.config({
            appId: APP_ID,
            timestamp: data.timestamp,
            nonceStr: data.noncestr,
            signature: data.sign,
            jsApiList: ['scanQRCode', 'chooseImage'],
        });
        wx.ready(function () {
            //shareData && wx.updateAppMessageShareData(shareData);
            console.log('微信JS-SDK初始化成功');
        });
        wx.error(function (res) {
            console.error('微信JS-SDK初始化失败', res);
        });
    } catch (err) {
        console.log(err);
    }
}

export { wx, wxAuthLoginByBase, setWxConfig };
