// index.jsx
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { dataRes, lastList } from './const';

const Index = () => {
    const [list, setList] = useState([]);
    const [current, setCurrent] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // 获取-数据
    const getData = async () => {
        if (current < dataRes.pages) {
            setList([...list, ...dataRes.list]);
        } else {
            setList([...list, ...lastList]);
            setHasMore(false);
        }
    };
    // 下一页-滚动加载更多
    const nextLoadMoreFn = () => {
        setCurrent((prev) => prev + 1);
    };
    // 下拉刷新函数
    const pullDownRefreshFn = () => {
        setCurrent(1);
        setHasMore(true);
        setList([...dataRes.list]);
    };

    useEffect(() => {
        getData();
    }, [current]);

    return (
        <div id="scrollContainer" style={{ height: '500px', overflow: 'auto', border: '1px solid #000' }}>
            <div style={{ height: '200px', border: '1px solid #f00' }}>其他盒子内容</div>
            <InfiniteScroll
                scrollableTarget="scrollContainer" // 可滚动的盒子的id
                dataLength={current * 10} // 数据列表长度
                hasMore={hasMore} // 告诉组件滚动到底部时，是否需要触发next函数
                next={nextLoadMoreFn} // 滚动到底部时触发函数,加载更多
                loader={<h4>加载中...</h4>} // loading
                pullDownToRefresh // 是否启用下拉刷新
                pullDownToRefreshThreshold={100} // 用户需要下拉才能触发刷新的最小距离
                refreshFunction={pullDownRefreshFn} // 下拉刷新函数
                endMessage={
                    // 所有列表数据加载完后，显示的底部内容
                    <p style={{ textAlign: 'center' }}>
                        <b>我们也是有底线的</b>
                    </p>
                }
                pullDownToRefreshContent={
                    // 下拉过程中的文字内容
                    <h3 style={{ textAlign: 'center' }}>&#8595; 下拉过程中的文字内容</h3>
                }
                releaseToRefreshContent={
                    // 下拉到底的时候，提示文字
                    <h3 style={{ textAlign: 'center' }}>&#8593; 释放以刷新</h3>
                }
            >
                <div>
                    {list.map((item, index) => (
                        <div key={index} style={{ height: '100px' }}>
                            {item.productName}
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Index;
