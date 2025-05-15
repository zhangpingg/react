import React, { useEffect, forwardRef, useRef } from 'react';
import BScroll from 'better-scroll';
import styles from './index.module.less';

const Index = forwardRef((props, ref) => {
    const cityListRef = useRef(null);
    // 存储 better-scroll 实例
    const scrollInstancesRef = useRef({
        cityList: null,
    });

    // 初始化 better-scroll 实例
    const initScroll = (ref, listName) => {
        if (ref.current && !scrollInstancesRef.current[listName]) {
            scrollInstancesRef.current[listName] = new BScroll(ref.current, {
                scrollY: true,
                click: true,
                bounce: {
                    top: false,
                    bottom: false,
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
        <div className={styles['box']} ref={cityListRef}>
            <div className={styles['box-list']}>
                <div className={styles['box-list-item']}>内容1</div>
                <div className={styles['box-list-item']}>内容2</div>
                <div className={styles['box-list-item']}>内容3</div>
                <div className={styles['box-list-item']}>内容4</div>
                <div className={styles['box-list-item']}>内容5</div>
                <div className={styles['box-list-item']}>内容6</div>
                <div className={styles['box-list-item']}>内容7</div>
                <div className={styles['box-list-item']}>内容8</div>
                <div className={styles['box-list-item']}>内容9</div>
            </div>
        </div>
    );
});

export default Index;
