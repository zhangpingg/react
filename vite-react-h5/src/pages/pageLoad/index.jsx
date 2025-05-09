/*
 * @Author: zhangping
 * @Date: 2025-02-17 15:11:26
 * @Description: 分页加载更多
 */

import React, { useEffect, useState } from 'react';
import { PullToRefresh, InfiniteScroll } from 'antd-mobile';
import PageLoading from '@/components/pageLoading/index.jsx';
import styles from './index.module.less';
import cn from 'classnames';

const Index = () => {
    const [data, setData] = useState([]);
    const [pageConfig, setPageConfig] = useState({
        current: 1,
        size: 10,
        hasMore: true,
    });
    const [isLoading, setIsLoading] = useState(false);

    // 模拟接口
    const apiMock = (params) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let _list = [];
                for (let i = 1; i <= 20; i++) {
                    _list.push(`第${params.current}页：${i}`);
                }
                let res = {
                    list: _list,
                    pages: 3,
                    current: params.current,
                    size: params.size,
                };
                resolve(res);
            }, 2000);
        });
    };
    // 获取列表（下拉刷新&加载更多）
    const getList = async (current) => {
        try {
            setIsLoading(true);
            const res = await apiMock({ current: current, size: pageConfig.size });
            console.log(11, res);
            setData((prev) => {
                if (current === 1) {
                    return res.list;
                } else {
                    return [...prev, ...res.list];
                }
            });
            setPageConfig((prev) => ({
                ...prev,
                current: res.current,
                hasMore: res.current < res.pages,
            }));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getList(1);
    }, []);

    return (
        <div className={cn({ 'fs-14': true, [styles['pl']]: true })}>
            <PullToRefresh onRefresh={() => getList(1)}>
                {(data.length === 0) & isLoading ? (
                    <PageLoading />
                ) : (
                    <>
                        {data.length > 0 ? (
                            <div className={styles['pl-list']}>
                                <div>
                                    {data.map((item, index) => (
                                        <p key={index} className={styles['pl-list-item']}>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                                <InfiniteScroll
                                    loadMore={() => getList(pageConfig.current + 1)}
                                    hasMore={pageConfig.hasMore}
                                    threshold={100}
                                >
                                    {/*自定义内容*/}
                                    {/*{pageConfig.hasMore ? <span>Loading</span> : <span>--- 我是有底线的 ---</span>}*/}
                                </InfiniteScroll>
                            </div>
                        ) : (
                            <div className={styles['pl-empty']}>暂无数据</div>
                        )}
                    </>
                )}
            </PullToRefresh>
        </div>
    );
};

export default Index;
