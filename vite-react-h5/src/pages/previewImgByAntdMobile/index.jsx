/*
 * @Author: zhangping
 * @Date: 2025-04-28 14:49:02
 * @Description: 菜单名称-模块名称
 */

import React from 'react';
import ImgPreview from '@/components/imgPreview/index.jsx';
import styles from './index.module.less';

const Index = () => {
    let singleImg = 'https://img2.baidu.com/it/u=3676341235,240287184&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=578';
    let imgList = [
        'https://img2.baidu.com/it/u=3676341235,240287184&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=578',
        'https://miaobi-lite.bj.bcebos.com/miaobi/5mao/b%27LV8xNzM2NTM1NTY4LjUxOTkzNw%3D%3D%27/0.png',
        'https://img2.baidu.com/it/u=706154024,2050458212&fm=253&app=138&f=JPEG?w=800&h=1732',
    ];

    return (
        <div className={styles['box']}>
            {/*单个图片*/}
            <ImgPreview urls={[singleImg]}>
                <img className={styles['box-img']} src={singleImg} />
            </ImgPreview>
            <br />

            {/*多个图片*/}
            <ImgPreview urls={imgList}>
                {imgList.map((url) => {
                    return <img className={styles['box-img']} key={url} src={url} />;
                })}
            </ImgPreview>
        </div>
    );
};

export default Index;
