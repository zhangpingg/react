/*
 * @Author: zhangping
 * @Date: 2025-05-09 10:21:21
 * @Description: 页面loading
 */

import React from 'react';
import { SpinLoading } from 'antd-mobile';

const Index = () => {
    return (
        <div className="fs-12 tac" style={{ marginTop: '30%' }}>
            <div className="flex-c">
                <SpinLoading color="primary" style={{ '--size': '20px' }} />
            </div>
            <p className="mt-20">加载中...</p>
        </div>
    );
};

export default Index;
