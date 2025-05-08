/*
 * @Author: zhangping
 * @Date: 2025-04-28 14:49:02
 * @Description: 带整理
 */

import React, { useEffect } from 'react';
import cn from 'classnames';
import { SafeArea } from 'antd-mobile';
import styles from './index.module.less';

const Index = () => {
    return (
        <div className={cn(styles['box'])}>
            <div className={styles['box-header']}>顶部</div>
            <div className={cn(styles['box-main'], 'safe-area')}>
                {/* <div className={styles['box-main-content']}> */}
                <p>内容1</p>
                <p>内容2</p>
                <p>内容3</p>
                <p>内容4</p>
                <p>内容5</p>
                <p>内容6</p>
                <p>内容7</p>
                <p>内容8</p>
                <p>内容9</p>
                {/* </div> */}
                {/* <div style={{ background: '#ffcfac' }}>
                    <SafeArea position="bottom" />
                </div> */}
            </div>
        </div>
    );
};

export default Index;

