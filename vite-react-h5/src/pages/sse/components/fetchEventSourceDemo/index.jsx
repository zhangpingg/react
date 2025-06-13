/*
 * @Author: zhangping
 * @Date: 2025-05-19 17:29:16
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect, useState } from 'react';
import { fetchEventSource } from '@microsoft/fetch-event-source';

const Index = () => {
    const [data, setData] = useState('');
    const fn1 = async () => {
        // 请查看 server/server1.js
        await fetchEventSource('http://localhost:9001/getData', {
            method: 'post',
            onopen: (res) => {
                console.log('连接已连接');
            },
            onmessage: (event) => {
                const res = JSON.parse(event.data);
                console.log('数据', res);
                setData((prev) => {
                    return prev + res.data;
                });
            },
            onerror: (err) => {
                console.error('SSE 错误:', err);
            },
            onclose: () => {
                console.log('连接已关闭');
            },
        });
    };
    useEffect(() => {
        fn1();
    }, []);

    return <div>从接口获取的数据是：{data}</div>;
};

export default Index;
