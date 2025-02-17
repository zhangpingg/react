/*
 * @Author: zhangping
 * @Date: 2025-02-18 15:23:20
 * @Description: H5和app通信
 */

import { v1 as uuid } from 'uuid';

const NATIVE_CHANNEL = 'zcNativeChannel'; // 原生通信通道名称
const JAVASCRIPT_CHANNEL = 'zcJavascriptChannel'; // js通信通道名称
const REQUEST_TIME_OUT = 2000;

class JSBridge {
    native = window[NATIVE_CHANNEL];
    requestCallbackMap = {};
    constructor() {
        window[JAVASCRIPT_CHANNEL] = (jsonStr) => {
            const message = JSON.parse(decodeURIComponent(atob(jsonStr)));
            console.log('message:', message);
            const id = message.id;
            const params = message.params;
            console.log('params:', params);
            this.requestCallbackMap[id] && this.requestCallbackMap[id](params);
        };
    }
    // 请求响应
    request = (eventName, requestParams, timeout = REQUEST_TIME_OUT) => {
        return new Promise((resolve) => {
            const id = uuid();
            let timer;
            this.requestCallbackMap[id] = (params) => {
                clearTimeout(timer);
                delete this.requestCallbackMap[id];
                resolve(params);
            };
            timer = setTimeout(() => {
                // code == -1表示响应超时
                this.requestCallbackMap[id] && this.requestCallbackMap[id]({ code: -1, data: '访问超时' });
            }, timeout);
            this.native &&
                this.native.postMessage(
                    JSON.stringify({
                        type: 'request',
                        id: id,
                        eventName: eventName,
                        params: requestParams,
                    })
                );
        });
    };
}

const jsBridge = new JSBridge();
export default jsBridge;
