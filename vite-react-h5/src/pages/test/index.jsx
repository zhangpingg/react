import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import './styles.less';
import { header, data } from './const.js';

const Index = () => {
    return (
        <div className="box">
            <div className="table-container">
                <div className="table-header">
                    <p className="table-header-cell table-header-cellSticky fs-14"></p>
                    {header.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className={cn({
                                    'table-header-cell fs-14': true,
                                })}
                            >
                                {item.name}
                            </p>
                        );
                    })}
                </div>
                <div className="table-body">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="table-body-row">
                                <p className="table-body-cell table-body-cellSticky fs-14">{item.name}</p>
                                <p className="table-body-cell fs-14 ">{item.aa}</p>
                                <p className="table-body-cell fs-14">{item.bb}</p>
                                <p className="table-body-cell fs-14">{item.cc}</p>
                                <p className="table-body-cell fs-14">{item.dd}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Index;
