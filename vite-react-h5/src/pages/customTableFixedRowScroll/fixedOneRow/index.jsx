import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';
import './styles.less';
import { resHeader, resData } from './const.js';

const Index = () => {
    const [fixedRowId, setFixedRowId] = useState();
    const [headerList, setHeaderList] = useState(resHeader);
    const [bodyList, setBodyList] = useState(resData);

    // 获取索引
    const getIndex = (list, id) => {
        let _index = 0;
        list.map((item, index) => {
            if (item.id === id) {
                _index = index;
            }
        });
        return _index;
    };
    // 固定列
    const fixedRow = (item) => {
        if (item.id === fixedRowId) {
            setFixedRowId(null);
            setHeaderList((prev) => {
                let _list = _.cloneDeep(prev).sort((a, b) => a.id - b.id);
                return _list;
            });
            setBodyList((prev) => {
                let _list = _.cloneDeep(prev).sort((a, b) => a.id - b.id);
                return _list;
            });
        } else {
            setFixedRowId(item.id);
            setHeaderList((prev) => {
                let _list = _.cloneDeep(prev).sort((a, b) => a.id - b.id);
                var _removedItem = _list.splice(getIndex(_list, item.id), 1)[0];
                _list.splice(1, 0, _removedItem);
                return _list;
            });
            setBodyList((prev) => {
                let _list = _.cloneDeep(prev).sort((a, b) => a.id - b.id);
                var _removedItem = _list.splice(getIndex(_list, item.id), 1)[0];
                _list.splice(1, 0, _removedItem);
                return _list;
            });
        }
    };

    // 禁用盒子弹性滚动（第一次还有弹性滚动，后面就禁用了）
    useEffect(() => {
        const div = document.querySelector('.for');
        let startY = 0;
        div.addEventListener(
            'touchstart',
            (e) => {
                if (div.scrollHeight <= div.clientHeight) return;
                startY = e.touches[0].pageY;
            },
            { passive: false }
        );
        div.addEventListener(
            'touchmove',
            (e) => {
                if (div.scrollHeight <= div.clientHeight) return;
                const currentY = e.touches[0].pageY;
                const deltaY = currentY - startY;
                const maxScroll = div.scrollHeight - div.clientHeight;
                const currentScroll = div.scrollTop;
                // 顶部且下拉或底部且上拉时阻止默认
                if ((currentScroll <= 0 && deltaY > 0) || (currentScroll >= maxScroll && deltaY < 0)) {
                    e.preventDefault();
                }
                startY = currentY;
            },
            { passive: false }
        );
    }, []);

    return (
        <div className="for">
            <div className="table-container">
                <div className="table-header">
                    {headerList.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className={cn({
                                    'table-header-cell fs-14': true,
                                    'table-header-cellSticky': index === 0,
                                    'table-header-cellStickyOne': fixedRowId === item.id,
                                })}
                                onClick={() => {
                                    fixedRow(item);
                                }}
                            >
                                {item.name}
                            </p>
                        );
                    })}
                </div>
                <div className={'table-title'}>
                    {headerList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cn('pl-12 pt-7 pb-7 fs-12 table-title-cell', {
                                    'table-title-cellSticky': index === 0,
                                })}
                            >
                                {index === 0 && <div>基本信息</div>}
                            </div>
                        );
                    })}
                </div>
                <div className="table-body">
                    {bodyList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cn({
                                    'table-body-row': true,
                                    'table-body-row-cellSticky': index === 0,
                                    'table-body-row-cellStickyOne': item.id === fixedRowId,
                                })}
                            >
                                <p className="table-body-cell fs-14">{item.aa}</p>
                                <p className="table-body-cell fs-14 ">{item.bb}</p>
                                <p className="table-body-cell fs-14">{item.cc}</p>
                                <p className="table-body-cell fs-14">{item.dd}</p>
                                <p className="table-body-cell fs-14">{item.ee}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Index;
