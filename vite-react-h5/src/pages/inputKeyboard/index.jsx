/*
 * @Author: zhangping
 * @Date: 2025-02-17 15:11:26
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect } from 'react';
import cn from 'classnames';
import styles from './index.module.less';

const Index = () => {
    // 光标聚焦
    const inputFocus = () => {
        console.log('光标聚焦');
    };
    // 光标离开
    const inputBlur = () => {
        console.log('光标离开');
    };

    useEffect(() => {
        // 监听窗口的size事件，只有安卓会触发（可以控制显隐底部按钮，可以控制页面滚动）
        window.addEventListener('resize', function () {
            let currentWindowHeight = window.innerHeight;
            if (currentWindowHeight < 600) {
                const boxMain = document.getElementById('box'); // 是获取盒子div，不是盒子里面的div
                if (boxMain) {
                    boxMain.scrollTop = 300;
                }
                // setIsShowFooter(false);
            } else {
                const boxMain = document.getElementById('box');
                if (boxMain) {
                    boxMain.scrollTop = 0;
                }
                // setIsShowFooter(true);
            }
        });

        // 输入框的光标事件
        const input = document.getElementById('input');
        if (input) {
            input.addEventListener('focus', inputFocus);
            input.addEventListener('blur', inputBlur);
            return () => {
                input.removeEventListener('focus', inputFocus);
                input.removeEventListener('blur', inputBlur);
            };
        }
    }, []);

    return (
        <div className={styles['box']} id="box">
            <div className={styles['box-main']}>
                <div className={cn(styles['box-main-box1'], 'mb-20')}></div>
                <input type="text" id="input" />
                <div className={cn(styles['box-main-box2'], 'mt-20')}></div>
            </div>
        </div>
    );
};

export default Index;
