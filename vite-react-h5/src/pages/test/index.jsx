/*
 * @Author: zhangping
 * @Date: 2025-05-09 16:21:48
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect, useRef } from 'react';
import BScroll from 'better-scroll';
import { Button, Popup } from 'antd-mobile';
import './styles.less';

const Index = () => {
    const provinceColumnRef = useRef(null);
    // 存储 better-scroll 实例
    const scrollInstances = useRef({
        province: null,
        city: null,
        highway: null,
        serviceArea: null,
    });

    // 初始化 better-scroll 实例
    const initScroll = (ref, columnName) => {
        if (ref.current && !scrollInstances.current[columnName]) {
            scrollInstances.current[columnName] = new BScroll(ref.current, {
                scrollY: true,
                click: true,
                bounce: {
                    top: false,
                    bottom: false,
                },
            });
        }
    };
    // 获取数据
    const getList = () => {};

    useEffect(() => {
        initScroll(provinceColumnRef, 'province');
        return () => {
            Object.keys(scrollInstances.current).forEach((key) => {
                destroyScroll(key);
            });
        };
    }, []);

    return (
        <div ref={provinceColumnRef} className="box">
            <div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
                <div>内容</div>
            </div>
        </div>
    );
};

export default Index;
