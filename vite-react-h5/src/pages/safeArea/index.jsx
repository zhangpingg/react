/*
 * @Author: zhangping
 * @Date: 2025-04-28 14:49:02
 * @Description: 安全区域
 */

import React from 'react';
import cn from 'classnames';
import { SafeArea } from 'antd-mobile';
import styles from './index.module.less';

const Index = () => {
    return (
        <div className={cn(styles['box'])}>
            <div className={styles['box-header']}>
                顶部：只有在手机上直接打开该页面才可以看到安全区域，通过路由跳转进该页面是不行的，因为底部有浏览器默认的一些东西
            </div>
            {/*方式1*/}
            <div className={cn(styles['box-main'], 'safe-area-20')}>
                <p>内容1</p>
                <p>内容2</p>
                <p>内容3</p>
                <p>内容4</p>
                <p>内容5</p>
                <p>内容6</p>
                <p>内容7</p>
                <p>内容8</p>
                <p>内容9</p>
                {/*方式2*/}
                <div style={{ background: '#ffcfac' }}>
                    <SafeArea position="bottom" />
                </div>
            </div>
        </div>
    );
};

export default Index;
