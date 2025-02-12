import React from 'react';
import { Button } from 'antd-mobile';
import styles from './index.module.less';

const Index = () => {
    return (
        <div className={styles['ptr']}>
            <div className="mb-20">
                antd-mobile <br />
                <Button size="mini" color="primary">
                    test
                </Button>
            </div>

            <div className={styles['ptr-custom']}>
                自定义编写 <br />
                <p className="fs-32">内容</p>
            </div>
        </div>
    );
};

export default Index;
