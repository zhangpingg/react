/*
 * @Author: zhangping
 * @Date: 2025-02-11 14:06:46
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './index.module.less';

const Index = () => {
    const navigate = useNavigate();

    const jumpPage = (path) => {
        navigate(`/${path}`);
        //navigate(-1);
    };

    return (
        <div className={styles['h']}>
            <button size="mini" color="primary" onClick={() => jumpPage('test')}>
                test
            </button>
            <br />
            <button size="mini" color="primary" onClick={() => jumpPage('demo1')}>
                demo1
            </button>
        </div>
    );
};

export default Index;
