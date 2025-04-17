import React, { useEffect, useRef } from 'react';
import './styles.less';

const Index = () => {
    return (
        <div className="box">
            <div className="table-container">
                <div className="table-header">
                    <p className="table-header-item fs-14 sticky-col">表头1</p>
                    <p className="table-header-item fs-14 sticky-col2">表头2</p>
                    <p className="table-header-item fs-14 ">表头3</p>
                    <p className="table-header-item fs-14 ">表头4</p>
                </div>
                <div className="table-body">
                    <div className="table-body-row">
                        <p className="table-body-cell fs-14 sticky-col">1-1</p>
                        <p className="table-body-cell fs-14 sticky-col2">1-2</p>
                        <p className="table-body-cell fs-14">1-3</p>
                        <p className="table-body-cell fs-14">1-4</p>
                    </div>
                    <div className="table-body-row">
                        <p className="table-body-cell fs-14 sticky-col">2-1</p>
                        <p className="table-body-cell fs-14 sticky-col2">2-2</p>
                        <p className="table-body-cell fs-14">2-3</p>
                        <p className="table-body-cell fs-14">2-4</p>
                    </div>
                    <div className="table-body-row">
                        <p className="table-body-cell fs-14 sticky-col">3-1</p>
                        <p className="table-body-cell fs-14 sticky-col2">3-2</p>
                        <p className="table-body-cell fs-14">3-3</p>
                        <p className="table-body-cell fs-14">3-4</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
