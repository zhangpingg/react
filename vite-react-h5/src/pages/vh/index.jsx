/*
 * @Author: zhangping
 * @Date: 2025-04-28 14:49:02
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect } from 'react';
import styles from './index.module.less';

const Index = () => {
    return (
        <div className={styles['box']}>
            <div className={styles['box-header']}>顶部</div>
            <div className={styles['box-main']}>内容</div>
        </div>
    );
};

export default Index;
