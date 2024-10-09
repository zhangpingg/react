import { defineConfig } from 'umi';
import routes from './config/routes';
import proxy from './config/proxy';
import path from 'path';
const proem = require('postcss-px2rem');

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    title: '标题',
    favicon: '/favicon.png',
    routes: routes,
    proxy,
    fastRefresh: {}, // 快速刷新
    dva: {
        immer: true,
        hmr: true,
    },
    alias: {
        // 别名配置
        '@': path.resolve('src'),
    },
    //extraBabelPlugins: [
    //  // 按需引入
    //  [
    //    'import',
    //    {
    //      libraryName: 'antd',
    //      libraryDirectory: 'es', // default: lib
    //      style: true,
    //    },
    //  ],
    //],
    extraPostCSSPlugins: [
        proem({
            remUnit: 75, // 基准值，表示1rem=75px
            propList: ['*'],
        }),
    ],
});
