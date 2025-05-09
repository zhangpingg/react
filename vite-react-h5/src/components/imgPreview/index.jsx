/*
 * @Author: chengleilei
 * @Date: 2025-05-06 16:23:08
 * @Description: 图片预览
 */
import React from 'react';
import { ImageViewer } from 'antd-mobile';
import cn from 'classnames';
import styles from './index.module.less';

const Index = ({ children, urls = [], gap = { row: 0, column: 0 } }) => {
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
        <div className={cn(styles['preview-container'], `row-gap-${gap.row}`, `column-gap-${gap.column}`)}>
            {Array.isArray(children) ? (
                React.Children.map(children, (child, index) => {
                    return (
                        <div className={styles['img-container']} key={index}>
                            {React.cloneElement(child, {
                                onClick: handleMultiClick(index),
                            })}
                        </div>
                    );
                })
            ) : (
                <div className={styles['img-container']}>
                    {React.cloneElement(children, {
                        onClick: handleSingleClick,
                    })}
                </div>
            )}
        </div>
    );
};

export default Index;
