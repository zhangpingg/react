import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/store';

import AppRouter from './router/index.jsx';
import './base.less';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <AppRouter />
        </StrictMode>
    </Provider>
);

