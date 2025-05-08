/*
 * @Author: chengleilei
 * @Date: 2025-05-06 16:23:08
 * @Description: 图片预览
 */
import React from 'react';
import { ImageViewer } from 'antd-mobile';
import styles from './index.module.less';

const Index = ({ children, urls = [] }) => {
    // 单图预览
    const handleSingleClick = (e) => {
        e.stopPropagation();
        ImageViewer.show({
            image: urls[0],
        });
    };

    // 多图预览
    const handleMultiClick =
        (index = 0) =>
        (e) => {
            e.stopPropagation();
            ImageViewer.Multi.show({
                images: urls,
                defaultIndex: index,
            });
        };

    return (
        <div className={styles['preview-container']}>
            {Array.isArray(children)
                ? React.Children.map(children, (child, index) => {
                      return React.cloneElement(child, {
                          onClick: handleMultiClick(index),
                      });
                  })
                : React.cloneElement(children, {
                      onClick: handleSingleClick,
                  })}
        </div>
    );
};

export default Index;
