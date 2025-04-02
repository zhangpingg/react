/*
 * @Author: zhangping
 * @Date: 2025-02-17 15:11:26
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect } from 'react';
import { SafeArea } from 'antd-mobile';

const Index = () => {
    return (
        <div>
            <div style={{ background: '#ace0ff' }}>
                <SafeArea position="top" />
            </div>
            <div>111</div>
            <div style={{ background: '#ffcfac' }}>
                <SafeArea position="bottom" />
            </div>
        </div>
    );
};

export default Index;
