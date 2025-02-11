/*
 * @Author: zhangping
 * @Date: 2025-02-11 15:07:58
 * @Description: antd-mobile
 */

import React from 'react';
import { Button, Input } from 'antd-mobile';
import styles from './index.module.less';

const Index = () => {
    return (
        <div className={styles['am']}>
            <Button block color="primary" size="mini">
                按钮
            </Button>
        </div>
    );
};

export default Index;
