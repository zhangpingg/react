/*
 * @Author: zhangpinig
 * @Date: 2025-02-17 14:22:00
 * @Description: 空状态
 */

import React from 'react';
import cn from 'classnames';
import styles from './index.module.less';

const Index = (props) => {
    const {
        text = '暂无数据',
        imgUrl = 'https://zc-oss.zcrubber.com/upload/files/2023/11/20/21791911241489074_list_color_empty.1700461773652.webp',
    } = props;

    return (
        <div className={cn(styles['nd'], 'tac')}>
            <img className={styles['nd-img']} src={imgUrl} />
            <p className={cn(styles['nd-text'], 'fs-14 mt-24')}>{text}</p>
        </div>
    );
};

export default Index;
