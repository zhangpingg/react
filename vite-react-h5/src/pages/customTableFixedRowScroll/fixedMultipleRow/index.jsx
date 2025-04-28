import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import _ from 'lodash';
import './styles.less';
import { resFixedHeader, resHeader, resFixedList, resList } from './const.js';

const Index = () => {
    const [fixedRowIdList, setFixedRowIdList] = useState([]);

    const [fixedHeader, setFixedHeader] = useState(resFixedHeader);
    const [headerList, setHeaderList] = useState(resHeader);
    const [allHeader, setAllHeader] = useState([]);

    const [fixedList, setFixedList] = useState(resFixedList);
    const [scrollList, setScrollList] = useState(resList);
    const [allList, setAllList] = useState([]);

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
        if (fixedRowIdList.includes(item.id)) {
            let _idList = _.cloneDeep(fixedRowIdList).filter((id) => item.id != id);
            setFixedRowIdList(_idList);

            // 头部
            let _fixedHeader = _.cloneDeep(fixedHeader);
            let _removedHeaderItem = _fixedHeader.splice(getIndex(_fixedHeader, item.id), 1)[0];
            setFixedHeader(_fixedHeader);
            setHeaderList((prev) => {
                return [_removedHeaderItem, ...prev];
            });
            // main滚动区域
            let _fixedList = _.cloneDeep(fixedList);
            let _removedScrollItem = _fixedList.splice(getIndex(_fixedList, item.id), 1)[0];
            setFixedList(_fixedList);
            setScrollList((prev) => {
                return [_removedScrollItem, ...prev];
            });
        } else {
            setFixedRowIdList((prev) => {
                return [...prev, item.id];
            });

            // 头部
            let _headerList = _.cloneDeep(headerList);
            let _removedHeaderItem = _headerList.splice(getIndex(_headerList, item.id), 1)[0];
            setFixedHeader((prev) => {
                return [...prev, _removedHeaderItem];
            });
            setHeaderList(_headerList);
            // main滚动区域
            let _scrollList = _.cloneDeep(scrollList);
            let _removedScrollItem = _scrollList.splice(getIndex(_scrollList, item.id), 1)[0];
            setFixedList((prev) => {
                return [...prev, _removedScrollItem];
            });
            setScrollList(_scrollList);
        }
    };

    useEffect(() => {
        setAllHeader([...fixedHeader, ...headerList]);
    }, [fixedHeader, headerList]);
    useEffect(() => {
        setAllList([...fixedList, ...scrollList]);
    }, [fixedList, scrollList]);

    return (
        <div className="fmr">
            <div className="table-container">
                <div className="table-header">
                    {allHeader.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className={cn({
                                    'table-header-cell fs-14': true,
                                    'table-header-cellSticky': index === 0,
                                    'table-header-cellStickyOne': fixedHeader[1]?.id === item.id,
                                    'table-header-cellStickyTwo': fixedHeader[2]?.id === item.id,
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
                <div className="table-body">
                    {allList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cn({
                                    'table-body-row': true,
                                    'table-body-row-cellSticky': index === 0,
                                    'table-body-row-cellStickyOne': fixedList[1]?.id === item.id,
                                    'table-body-row-cellStickyTwo': fixedList[2]?.id === item.id,
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

