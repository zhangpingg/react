import { createRoot } from 'react-dom/client';
// 数据存储
import { Provider } from 'react-redux';
import store from '@/store';
import 'amfe-flexible'; // px->rem：动态修改body的font-size大小
import Vconsole from 'vconsole'; // 调试面板
import AppRouter from './router/index.jsx'; // 路由
import 'antd/dist/reset.css'; // antd5样式
import 'react-photo-view/dist/react-photo-view.css'; // 预览图片的样式
import './styles//base.less';
import { getEnvironment } from '@/libs/util.win.js';
import { setWxConfig } from '@/libs/wx.js';

if (getEnvironment() !== 'prod') {
    new Vconsole();
}

setWxConfig();

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
