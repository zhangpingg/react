import React, { useState, useRef, useEffect } from 'react';

const Index = () => {
    const eventSourceRef = useRef(null);
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [connected, setConnected] = useState(false);

    // 创建SSE连接
    const connectSSE = () => {
        // 关闭已有连接：如果已存在 SSE 连接，则先关闭
        if (eventSourceRef.current) {
            eventSourceRef.current.close();
        }
        // 建立新连接：使用时间戳参数避免缓存，创建新的 EventSource 实例
        try {
            const eventSource = new EventSource(`/api/sse?t=${Date.now()}`);
            eventSourceRef.current = eventSource;
            // 监听打开事件：连接成功时设置状态为“已连接”
            eventSource.onopen = () => {
                setConnected(true);
            };
            // 监听消息事件：接收并解析服务器发送的消息
            eventSource.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    // 只处理在线用户数
                    if (data.onlineUsers !== undefined) {
                        setOnlineUsers(data.onlineUsers);
                    }
                } catch (error) {
                    console.error('解析数据失败:', error);
                }
            };
            // 监听错误事件：出错时关闭连接，并在5秒后尝试重新连接
            eventSource.onerror = (error) => {
                console.error('SSE连接错误:', error);
                setConnected(false);
                eventSource.close();
                // 5秒后尝试重新连接
                setTimeout(connectSSE, 5000);
            };
        } catch (error) {
            // 异常捕获：创建连接过程中若出错，也将在5秒后尝试重连
            console.error('创建SSE连接失败:', error);
            setTimeout(connectSSE, 5000);
        }
    };

    useEffect(() => {
        connectSSE();

        // 组件卸载时清理
        return () => {
            if (eventSourceRef.current) {
                eventSourceRef.current.close();
            }
        };
    }, []);

    return (
        <div>
            <div>在线用户统计</div>
            <div>状态：{connected ? '已连接' : '连接断开'}</div>
            <div>在线用户：{onlineUsers}</div>
        </div>
    );
};

export default Index;
