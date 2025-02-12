//  各服务器地址
const COMMON_API = 'http://10.1.2.345:8000';
const XONE_APP1_API = 'http://10.1.2.345:8000';

const envApi = {
    dev: {
        api: 'http://10.1.13.23',
    },
    prod: {
        api: 'https://quality.chaoyang.com:4434',
    },
    environment: 'dev',
};

export default {
    '/common-api': {
        target: COMMON_API,
        changeOrigin: true, // 是否把请求头中的 host 值设置成 target 值
        pathRewrite: { '^/common-api': '/' },
    },
    '/xone-app1-api': {
        target: XONE_APP1_API,
        changeOrigin: true,
    },
    '/apiUpload': {
        target: 'http://px.zhilun-k8s.com',
        changeOrigin: true,
        pathRewrite: { '/apiUpload': '' },
    },
    // 质管-测试
    '/test/api': {
        target: envApi[envApi.environment].api,
        changeOrigin: true,
        bypass(req, res, options) {
            const realUrl = new URL(req.url || '', options.target).href || '';
            res.setHeader('x-res-proxyUrl', realUrl);
        },
    },
};
