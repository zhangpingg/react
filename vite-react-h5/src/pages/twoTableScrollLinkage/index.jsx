/*
 * @Author: zhangping
 * @Date: 2025-02-17 15:11:26
 * @Description: 菜单名称-模块名称
 */

import React, { useRef, useEffect } from 'react';
import { Table } from 'antd';
import { columns, list } from './const.js';

const App = () => {
    const tableRef1 = useRef(null);
    const tableRef2 = useRef(null);

    useEffect(() => {
        // 没有竖向滚动条的时，滚动盒子是：.ant-table-content
        //const table1 = tableRef1?.current?.querySelector?.('.ant-table-content');
        //const table2 = tableRef2?.current?.querySelector?.('.ant-table-content');
        // 有竖向滚动条的时，滚动盒子是：.ant-table-body
        const table1 = tableRef1?.current?.querySelector?.('.ant-table-body');
        const table2 = tableRef2?.current?.querySelector?.('.ant-table-body');
        const scrollFn = (e) => {
            table1.scrollLeft = e.target.scrollLeft;
            table2.scrollLeft = e.target.scrollLeft;
        };
        table1.addEventListener('scroll', scrollFn);
        table2.addEventListener('scroll', scrollFn);
        return () => {
            table1.removeEventListener('scroll', scrollFn);
            table2.removeEventListener('scroll', scrollFn);
        };
    }, []);

    return (
        <div>
            <div ref={tableRef1}>
                <Table
                    columns={columns}
                    dataSource={list}
                    pagination={false}
                    scroll={{
                        x: 1500,
                        y: 100,
                    }}
                />
            </div>
            <div ref={tableRef2} className="mt-50">
                <Table
                    columns={columns}
                    dataSource={list}
                    pagination={false}
                    scroll={{
                        x: 1500,
                        y: 100,
                    }}
                />
            </div>
        </div>
    );
};

export default App;
