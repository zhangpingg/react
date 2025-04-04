import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import proxy from './config/proxy';
import postcssPxtorem from 'postcss-pxtorem';
import zipPack from 'vite-plugin-zip-pack';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        zipPack({
            inDir: 'dist',
            outDir: './',
            pathPrefix: 'dist',
        }),
    ],
    server: {
        open: '/home', // 当在开发阶段，如果你想默认打开某个页面
        port: 8080,
        cors: true,
        origin: 'http://localhost:8080',
        host: '0.0.0.0',
        proxy,
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
        extensions: ['.js', '.vue', '.json'],
    },
    css: {
        postcss: {
            plugins: [
                // @ts-ignore
                postcssPxtorem({
                    rootValue: 37.5, // 设计稿宽度 / 10，例如设计稿宽度是750px则写75
                    propList: ['*'], // 需要转换的属性，'*'表示所有属性
                    selectorBlackList: [], // 忽略的选择器
                    replace: true, // 是否替换原来的px单位
                    mediaQuery: false, // 是否在媒体查询中转换px
                    minPixelValue: 0, // 最小像素值
                }),
            ],
        },
    },
});

