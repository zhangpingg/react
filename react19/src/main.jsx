import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { debounce } from 'lodash';
// 数据存储
import { Provider } from 'react-redux';
import store from '@/store';
import 'amfe-flexible'; // px->rem：动态修改body的font-size大小
import Vconsole from 'vconsole'; // 调试面板
import AppRouter from './router/index.jsx'; // 路由
import 'antd/dist/reset.css'; // antd5样式
import 'react-photo-view/dist/react-photo-view.css'; // 预览图片的样式
import './styles/index.less';
import { getEnvironment } from '@/libs/util.win.js';
import { setWxConfig } from '@/libs/wx.js';

if (getEnvironment() !== 'prod') {
    new Vconsole();
}

setWxConfig();

// 创建包含视口高度处理的高阶组件
const ViewportHeightHandler = ({ children }) => {
    useEffect(() => {
        const setRealVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        const debouncedSetRealVh = debounce(setRealVh, 300);

        setRealVh(); // 立即执行一次初始化
        window.addEventListener('resize', debouncedSetRealVh); // 使用防抖后的函数

        return () => {
            window.removeEventListener('resize', debouncedSetRealVh);
            debouncedSetRealVh.cancel(); // 清除防抖的 pending 执行
        };
    }, []);

    return children;
};

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ViewportHeightHandler>
            <AppRouter />
        </ViewportHeightHandler>
    </Provider>
);
