/*
 * @Author: zhangping
 * @Date: 2025-02-17 15:11:26
 * @Description: 分页加载更多
 */

import React, { useState } from 'react';
import { PullToRefresh, InfiniteScroll, List } from 'antd-mobile';
import styles from './index.module.less';

const Index = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // 模拟接口
    const apiMock = (params) => {
        console.log('参数:', params);
        return new Promise((resolve) => {
            setTimeout(() => {
                let _list = [];
                for (let i = 1; i <= 20; i++) {
                    _list.push(`第${params.current}页：${i}`);
                }
                let res = {
                    list: _list,
                    pages: 3,
                };
                resolve(res);
            }, 2000);
        });
    };
    // 下拉刷新
    const pullToRefresh = async () => {
        const res = await apiMock({ current: 1 });
        setData(res.list);
        setHasMore(1 < res.pages);
        setCurrent(2);
    };
    // 加载更多
    const loadMore = async () => {
        const res = await apiMock({ current: current });
        setData((prev) => [...prev, ...res.list]);
        setHasMore(current < res.pages);
        setCurrent((prev) => ++prev);
    };

    return (
        <div className="fs-14">
            <PullToRefresh onRefresh={pullToRefresh}>
                <div className={styles['box']}>
                    <div>
                        {data.map((item, index) => (
                            <p key={index} className={styles['box-item']}>
                                {item}
                            </p>
                        ))}
                    </div>
                    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={100}>
                        {/*自定义内容*/}
                        {/*{hasMore ? <span>Loading</span> : <span>--- 我是有底线的 ---</span>}*/}
                    </InfiniteScroll>
                </div>
            </PullToRefresh>
        </div>
    );
};

export default Index;
