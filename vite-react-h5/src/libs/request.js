import axios from 'axios';
import { Toast } from 'antd-mobile';
import { getUrlQuery } from './util.tool';
import jsBridge from './JSBridge';

// 错误码
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '请求错误。',
    401: '用户没有权限（用户名或密码错误）。',
    403: '拒绝访问。',
    404: '请求地址出错。',
    406: '请求的格式不可得。',
    408: '请求超时。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器内部错误。',
    502: '网关错误。',
    503: '服务不可用。',
    504: '网关超时。',
    505: 'HTTP版本不受支持。',
    1000: 'token失效',
    1001: '微信公众号绑定手机号业务码过期。',
};

// 创建一个 axios 实例
const service = axios.create({
    timeout: 10000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        if (config.url.includes('/puti/') && process.env.NODE_ENV !== 'development') {
            let jsbData = null;
            if (config.hasOwnProperty('params')) {
                // query传参
                jsbData = config.params ? { queryParams: config.params } : null;
            } else if (config.hasOwnProperty('data')) {
                // body传参
                jsbData = config.data ? { params: config.data } : null;
            } else {
                jsbData = null;
            }
            return new Promise((resolve) => {
                jsBridge.request('sign', jsbData).then((res) => {
                    if (res.data) {
                        config.headers = Object.assign(
                            {},
                            { Authorization: `Bearer ${getUrlQuery('token')}` },
                            res.data
                        );
                        resolve(config);
                    }
                });
            });
        } else if (config.url.includes('/kunpeng/')) {
            // 微信授权后的token
            config.headers.Authorization = localStorage.getItem('wx-auth-token');
            return config;
        } else {
            // 普通接口的token
            config.headers.Authorization = `Bearer ${getUrlQuery('token')}`;
            return config;
        }
    },
    (err) => {
        // 发送失败
        return Promise.reject(err);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        const { data, status } = res;
        if (status !== 200) {
            Toast.show(codeMessage[status] || data.message || '当前访问人数过多，请稍后再试');
            return Promise.reject(codeMessage[status] || data.message || '当前访问人数过多，请稍后再试');
        }

        if (data.code !== 200) {
            if (typeof data === 'string' && data.indexOf('Blocked by Sentinel') > -1) {
                return Promise.reject('Blocked by Sentinel');
            }
            if ([1000, 1001].includes(data.code)) {
                // 微信公众号：token过期等，重新微信授权
                Toast.show(codeMessage[status] || data.message);
                // 最好加一个判断，某个页面失效，经授权后，跳转到某相应的页面
                //wxAuthLoginByBase('/customerLottery-authorize', {
                //    pathname: window.location.pathname,
                //    ...getUrlQuery(),
                //});
            } else {
                Toast.show(data.message);
            }
            return Promise.reject(data);
        }
        return Promise.resolve(data);
    },
    (error) => {
        console.warn(error);
        let errMsg = error.message;
        if (error && error.response) {
            errMsg = codeMessage[error.response.status];
        }
        Toast.show(errMsg);
        return Promise.reject(errMsg || new Error('当前访问人数过多，请稍后再试'));
    }
);

export default service;
