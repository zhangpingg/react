/*
 * @Author: zhangping
 * @Date: 2025-02-14 14:34:35
 * @Description: 路由跳转传参-首页
 */

import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
//import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Index = () => {
    const navigate = useNavigate();

    const jumpPage1 = () => {
        navigate('/routeJumpParam-details?id=1&name=Tom', { state: { aa: 1, bb: 2 } });
    };
    const jumpPage2 = () => {
        const params = {
            id: '2',
            name: 'Jack',
        };
        const searchParams = new URLSearchParams(params);
        navigate(`/routeJumpParam-details?${searchParams.toString()}`, { state: { aa: 3, bb: 4 } });
    };

    return (
        <div>
            <p className="fs-14">首页</p>
            <Button size="mini" color="primary" onClick={jumpPage1}>
                详情页1
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={jumpPage2}>
                详情页2
            </Button>
        </div>
    );
};

export default Index;
