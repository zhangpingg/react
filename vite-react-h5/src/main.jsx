import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/store';
import 'amfe-flexible';
import Vconsole from 'vconsole';
import AppRouter from './router/index.jsx';
import 'antd/dist/reset.css';
import './base.less';
import { getEnvironment } from '@/libs/util.win.js';

if (getEnvironment() !== 'prod') {
    new Vconsole();
}

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <AppRouter />
        </StrictMode>
    </Provider>
);
