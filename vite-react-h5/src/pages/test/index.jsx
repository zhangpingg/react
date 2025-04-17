import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';
import './styles.less';
import { resHeader, resData } from './const.js';

const Index = () => {
    const [fixedRowId, setFixedRowId] = useState();
    const [header, setHeader] = useState(resHeader);
    const [list, setList] = useState(resData);

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
        } else {
            setFixedRowId(item.id);
            setHeader((prev) => {
                console.log(11, prev);
                let _list = _.cloneDeep(prev);
                var _removedItem = _list.splice(getIndex(_list, item.id), 1)[0];
                _list.splice(1, 0, _removedItem);
                console.log(22, _list);
                return _list;
            });
            setList((prev) => {
                let _list = _.cloneDeep(prev);
                var _removedItem = _list.splice(getIndex(_list, item.id), 1)[0];
                _list.splice(1, 0, _removedItem);
                return _list;
            });
        }
    };

    return (
        <div className="box">
            <div className="table-container">
                <div className="table-header">
                    {header.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className={cn({
                                    'table-header-cell fs-14': true,
                                    'table-header-cellSticky': index === 0,
                                    'table-header-cellSticky2': fixedRowId === item.id,
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
                    {list.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cn({
                                    'table-body-row': true,
                                    'table-body-row-cellSticky': index === 0,
                                    'table-body-row-cellSticky2': item.id === fixedRowId,
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

