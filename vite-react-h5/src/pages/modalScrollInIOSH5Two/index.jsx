/*
 * @Author: zhangping
 * @Date: 2025-05-09 16:21:48
 * @Description: 菜单名称-模块名称
 */

import React, { useState } from 'react';
import { Button, Popup, Dropdown } from 'antd-mobile';
import './styles.less';
import ScrollList from './scrollList/index.jsx';

const Index = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Dropdown>
                <Dropdown.Item key="sorter" title="底部弹框中内容滚动">
                    {/*方式1*/}
                    <div className="fs-14">
                        <div onClick={() => setVisible(false)}>关闭</div>
                        <ul style={{ height: '200px', overflow: 'auto' }}>
                            <li style={{ height: '100px' }}>11</li>
                            <li style={{ height: '100px' }}>11</li>
                            <li style={{ height: '100px' }}>11</li>
                            <li style={{ height: '100px' }}>11</li>
                            <li style={{ height: '100px' }}>11</li>
                            <li style={{ height: '100px' }}>11</li>
                        </ul>
                    </div>
                    {/*方式2*/}
                    <hr />
                    <ScrollList />
                </Dropdown.Item>
            </Dropdown>
            <hr />

            <Button color="primary" size="mini" onClick={() => setVisible(true)}>
                底部弹框中内容滚动
            </Button>
            <Popup visible={visible} onClose={() => setVisible(false)}>
                <div className="boxMain fs-14">
                    <div className="boxMain-close" onClick={() => setVisible(false)}>
                        关闭
                    </div>
                    <ScrollList />
                </div>
            </Popup>
        </div>
    );
};

export default Index;
