import { useState } from 'react';
import { history } from 'umi';
import styles from './index.less';
import { Button } from 'antd-mobile';

const Index = () => {
    const jumpPage = (path: string) => {
        history.push(`/${path}`);
    };

    return (
        <div className={styles.home}>
            <Button
                size="mini"
                color="primary"
                className="db mb-10"
                onClick={() => jumpPage('test')}
            >
                test
            </Button>
            <Button
                size="mini"
                color="primary"
                className="db mb-10"
                onClick={() => jumpPage('antdMobile')}
            >
                antd-mobile
            </Button>
            <Button
                size="mini"
                color="primary"
                className="db mb-10"
                onClick={() => jumpPage('reactRedux')}
            >
                react-redux
            </Button>
            <Button
                size="mini"
                color="primary"
                className="db mb-10"
                onClick={() => jumpPage('dva')}
            >
                dva（持久化）
            </Button>
            <Button
                size="mini"
                color="primary"
                className="db mb-10"
                onClick={() => jumpPage('apiData')}
            >
                apiData
            </Button>
        </div>
    );
};

export default Index;
