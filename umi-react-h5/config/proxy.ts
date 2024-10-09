//  各服务器地址
const COMMON_API = 'http://10.1.2.345:8000';
const XONE_APP1_API = 'http://10.1.2.345:8000';

const envApi: any = {
    test: {
        api: 'http://10.1.13.23',
    },
    prod: {
        api: 'https://quality.chaoyang.com:4434',
    },
    environment: 'test',
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
    '/test/api': {
        target: envApi[envApi.environment].api,
        changeOrigin: true,
        bypass(req: any, res: any, options: any) {
            const realUrl = new URL(req.url || '', options.target).href || '';
            res.setHeader('x-res-proxyUrl', realUrl);
        },
    },
};
