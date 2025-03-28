// 【dva 持久化-1】
const model = {
    namespace: 'globalDva',
    state: {
        userObj: {
            name: '暂无',
            age: 0,
        },
        userList: [],
    },
    // 同步修改数据
    reducers: {
        changeUser(state: any, { payload }: any) {
            const _state = { ...state };
            _state.userObj = { ..._state.userObj, ...payload };
            return _state; // 只能返回一个完整的state对象，和 @reduxjs/toolkit 有点区别
        },
    },
    // 异步修改数据
    effects: {
        // 调用接口获取用户信息
        // { payload, callback }:any, { call, put, select }: any
        // yield call：执行异步请求
        // yield put：更新数据
        // yield select：获取state数据
        *getUser({ callback }: any, { put }: any): any {
            try {
                // const res = yield call(api.getSystemUser, payload);     // payload: 接口参数
                const res = { name: '李四', age: 22 };
                yield put({
                    type: 'changeUser', // 调用reducers中的方法
                    payload: res,
                });
                callback?.(res);
            } catch (e) {
                // console.log(e);
            }
        },
    },
};

export default model;
