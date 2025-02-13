import React from 'react';
import cn from 'classnames';
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

            <div className={cn(styles['ptr-custom'], 'fs-20')}>自定义编写</div>
        </div>
    );
};

export default Index;
