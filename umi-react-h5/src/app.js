// 【dva 持久化-2】
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['globalDva'], // 配置白名单 里面写需要配置的名字 也就是dva文件的namespace
};
// 数据持久化
const persistEnhancer =
    () => (createStore) => (reducer, initialState, enhancer) => {
        const store = createStore(
            persistReducer(persistConfig, reducer),
            initialState,
            enhancer,
        );
        const persist = persistStore(store);
        return { ...store, persist };
    };

export const dva = {
    config: {
        extraEnhancers: [persistEnhancer()],
    },
};
