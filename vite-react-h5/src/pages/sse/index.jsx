/*
 * @Author: zhangping
 * @Date: 2025-06-13 09:26:18
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect } from 'react';
import EventSourceDemo from './components/eventSourceDemo/index.jsx';
import FetchEventSourceDemo from './components/fetchEventSourceDemo/index.jsx';

const Index = () => {
    return (
        <div>
            <EventSourceDemo />
            <div className="mt-80"></div>
            <FetchEventSourceDemo />
        </div>
    );
};

export default Index;
