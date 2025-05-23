/*
 * @Author: zhangping
 * @Date: 2025-02-17 15:11:26
 * @Description: 去除IOS滚动时的回弹效果
 */

import React, { useEffect, useRef } from 'react';
import BScroll from 'better-scroll';
import styles from './index.module.less';

const Index = () => {
    const cityListRef = useRef(null);
    // 存储 better-scroll 实例
    const scrollInstancesRef = useRef({
        cityList: null,
    });

    // 初始化 better-scroll 实例
    const initScroll = (ref, listName) => {
        if (ref.current && !scrollInstancesRef.current[listName]) {
            scrollInstancesRef.current[listName] = new BScroll(ref.current, {
                scrollX: true,
                scrollY: true,
                click: true,
                bounce: {
                    top: false,
                    bottom: false,
                    left: false,
                    right: false,
                },
            });
        }
    };
    // 销毁 better-scroll 实例
    const destroyScroll = (listName) => {
        if (scrollInstancesRef.current[listName]) {
            scrollInstancesRef.current[listName].destroy();
            scrollInstancesRef.current[listName] = null;
        }
    };

    // 组件初始化
    useEffect(() => {
        if (cityListRef.current) {
            destroyScroll('cityList');
            initScroll(cityListRef, 'cityList');
        }
        // 组件卸载时销毁所有滚动实例
        return () => {
            Object.keys(scrollInstancesRef.current).forEach((key) => {
                destroyScroll(key);
            });
        };
    }, []);

    return (
        <>
            <p className="fs-14">苹果手机都生效</p>
            <div className={styles['box']} ref={cityListRef}>
                <div className={styles['box-main']}>
                    <div>内容1内容1内容1内容1内容1</div>
                    <div>内容1内容1内容1内容1内容1</div>
                    <div>内容1内容1内容1内容1内容1</div>
                    <div>内容1内容1内容1内容1内容1</div>
                    <div>内容1内容1内容1内容1内容1</div>
                    <div>内容1内容1内容1内容1内容1</div>
                    <div>内容1内容1内容1内容1内容1</div>
                    <div>内容1内容1内容1内容1内容1</div>
                </div>
            </div>

            <p className="fs-14 mt-20">12无效，14&15生效</p>
            <div className={styles['box2']}>
                <div className={styles['box2-main']}>
                    <div>内容1</div>
                    <div>内容1</div>
                    <div>内容1</div>
                    <div>内容1</div>
                    <div>内容1</div>
                    <div>内容1</div>
                    <div>内容1</div>
                    <div>内容1</div>
                </div>
            </div>
        </>
    );
};

export default Index;
