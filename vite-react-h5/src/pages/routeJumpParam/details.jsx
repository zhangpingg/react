/*
 * @Author: zhangping
 * @Date: 2025-02-14 14:34:35
 * @Description: 路由跳转传参-详情页
 */

import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
import { useNavigate, useSearchParams, useLocation } from 'react-router';
import { getUrlQuery } from '@/libs/util.tool';

const Index = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { state } = useLocation(); // {aa: 1, bb: 2}

    const id = searchParams.get('id'); // '1'
    const name = searchParams.get('name'); // 'Tom'
    const urlParams = getUrlQuery(); // 能获取到参数组成的对象：{id:'1', name:'Tom'}

    const goback = () => {
        navigate(-1);
    };

    useEffect(() => {
        console.log('参数', id, urlParams, state);
    }, []);

    return (
        <div>
            <p className="fs-14">详情页</p>
            <Button size="mini" color="primary" onClick={goback}>
                返回上一页
            </Button>
        </div>
    );
};

export default Index;
