import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
import styles from './index.module.less';

const Index = () => {
    useEffect(() => {}, []);

    return (
        <div className={styles['t']}>
            <Button size="mini" color="primary">
                test
            </Button>
        </div>
    );
};

export default Index;
