/*
 * @Author: zhangping
 * @Date: 2025-05-19 17:29:16
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect, useState } from 'react';
import { fetchEventSource } from '@microsoft/fetch-event-source';

const Index = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [data, setData] = useState('');
    const fn1 = async () => {
        // 请查看 server/server1.js
        await fetchEventSource('http://localhost:9001/getData', {
            method: 'post',
            onopen: (res) => {
                console.log('连接已连接');
                setIsConnected(true);
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
                setIsConnected(false);
            },
            onclose: () => {
                console.log('连接已关闭');
            },
        });
    };
    useEffect(() => {
        fn1();
    }, []);

    return (
        <div>
            <div>状态：{isConnected ? '已连接' : '连接断开'}</div>
            <div className="mt-20">从接口获取的数据：{data}</div>
        </div>
    );
};

export default Index;
