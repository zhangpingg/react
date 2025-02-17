import React from 'react';
import styles from './index.module.less';

const Index = () => {
    return (
        <div className={styles['sl']}>
            <div className={styles['sl-top']}>顶部内容</div>
            <div className={styles['sl-header']}>标题1</div>
            <div className={styles['sl-header']}>标题2</div>
            <div className={styles['sl-main']}>内容</div>
        </div>
    );
};

export default Index;
