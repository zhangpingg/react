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
            <Button color="primary" onClick={() => jumpPage('test')}>
                test
            </Button>
            <br />
            <br />
            <Button color="primary" onClick={() => jumpPage('antdMobile')}>
                antd-mobile
            </Button>
            <br />
            <br />
            <Button color="primary" onClick={() => jumpPage('reactRedux')}>
                react-redux
            </Button>
            <br />
            <br />
            <Button color="primary" onClick={() => jumpPage('dva')}>
                dva
            </Button>
            <br />
            <br />
            <Button color="primary" onClick={() => jumpPage('apiData')}>
                apiData
            </Button>
            <br />
            <br />
        </div>
    );
};

export default Index;
