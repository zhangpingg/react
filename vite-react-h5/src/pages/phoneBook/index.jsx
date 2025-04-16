/*
 * @Author: zhangping
 * @Date: 2025-02-17 15:11:26
 * @Description: 菜单名称-模块名称
 */

import React from 'react';
import { IndexBar, List } from 'antd-mobile';

const list = [
    { title: 'A', nav: '1', children: [{ name: 'A1' }, { name: 'A2' }, { name: 'A2' }] },
    { title: 'B', nav: '2', children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B2' }] },
    { title: 'C', nav: '3', children: [{ name: 'C1' }, { name: 'C2' }, { name: 'C2' }] },
    { title: 'D', nav: '4', children: [{ name: 'D1' }, { name: 'D2' }, { name: 'D2' }] },
    { title: 'E', nav: '5', children: [{ name: 'E1' }, { name: 'E2' }, { name: 'E2' }] },
    { title: 'F', nav: '6', children: [{ name: 'F1' }, { name: 'F2' }, { name: 'F2' }] },
];

export default () => {
    return (
        <div style={{ height: window.innerHeight }}>
            <IndexBar>
                {list.map((item) => {
                    const { title, nav, children } = item;
                    return (
                        <IndexBar.Panel index={nav} title={`标题${title}`} key={`标题${title}`}>
                            <List>
                                {children.map((itemIn, index) => (
                                    <List.Item key={index}>{itemIn.name}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    );
                })}
            </IndexBar>
        </div>
    );
};
