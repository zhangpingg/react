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
            plugins: [],
        },
    },
});

