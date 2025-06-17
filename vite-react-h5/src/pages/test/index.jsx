/*
 * @Author: zhangping
 * @Date: 2025-05-19 17:29:16
 * @Description: 待整理
 */

import React, { useEffect, useState } from 'react';
import htmlToPdf from './utils';
import { HomeOutlined } from '@ant-design/icons';
import localPic from '@/assets/01.jpg';
import styles from './index.module.less';

const onlinePic = 'https://img1.baidu.com/it/u=4086652234,221632892&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333';

const Index = () => {
    const [onlineUrl, setOnLineUrl] = useState();

    const fn1 = () => {
        const data = {
            id: 'container',
            type: 'download',
            title: 'PDF下载',
        };
        htmlToPdf(data);
    };
    const fn2 = () => {
        const data = {
            id: 'container',
            type: 'print',
            title: 'PDF打印',
        };
        htmlToPdf(data);
    };
    const fn3 = () => {
        const data = {
            id: 'container',
            type: 'preview',
            title: 'PDF预览',
        };
        htmlToPdf(data);
    };
    // 线上图片转换为base64图片
    const transImageToBase64Image = (src) => {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', src, true);
            xhr.responseType = 'blob';
            xhr.onload = function () {
                if (this.status === 200) {
                    const blob = this.response;
                    const oFileReader = new FileReader();
                    oFileReader.onloadend = function (e) {
                        const base64 = e?.target?.result;
                        resolve(base64);
                    };
                    oFileReader.readAsDataURL(blob);
                }
            };
            xhr.send();
        });
    };

    useEffect(() => {
        // 线上图片需要转换为base64，否则转换为canvas，再转图片的时候显示不出来
        transImageToBase64Image(onlinePic).then((url) => {
            setOnLineUrl(url);
        });
    }, []);

    return (
        <div className={styles.dti}>
            <div className={styles.dti_main} id="container">
                <HomeOutlined />
                <p>锄禾日当午</p>
                <p>汗滴禾下土</p>
                <p>谁知盘中餐</p>
                <p>粒粒皆辛苦</p>
                <img src={onlineUrl} crossOrigin="anonymous" />
                <img src={localPic} crossOrigin="anonymous" alt="" />
            </div>
            <button onClick={fn1}>下载PDF</button>
            <button onClick={fn2}>打印PDF</button>
            <button onClick={fn3}>预览PDF</button>
        </div>
    );
};

export default Index;
