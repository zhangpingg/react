import { defineConfig } from 'umi';
import routes from './config/routes';
import proxy from './config/proxy';
import path from 'path';
// 以下2个都可以
const prtoem = require('postcss-px2rem');
//const prtoem = require('postcss-pxtorem');

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
    extraPostCSSPlugins: [
        prtoem({
            remUnit: 37.5, // 基准值，表示1rem=37.5px
            rootValue: 37.5, // 指定转换倍率，我现在设置这个表示1rem=37.5px
            propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
            selectorBalckList: ['.adm-'], // 匹配不被转换为rem的选择器，例如UI框架antd-mobile
        }),
    ],
});
