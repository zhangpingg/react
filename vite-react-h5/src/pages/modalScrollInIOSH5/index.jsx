import React, { useEffect, useState } from 'react';
import { Button, Popup } from 'antd-mobile';
import './index.module.less';

const Index = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Button color="primary" size="mini" onClick={() => setVisible(true)}>
                底部弹框中内容滚动
            </Button>
            <Popup visible={visible} onClose={() => setVisible(false)} bodyStyle={{ height: '300px' }}>
                <div className="dm-main fs-14">
                    <div className="dm-main-close" onClick={() => setVisible(false)}>
                        关闭
                    </div>
                    <ul className="dm-main-list">
                        <li>11</li>
                        <li>22</li>
                        <li>33</li>
                        <li>44</li>
                    </ul>
                </div>
            </Popup>
        </div>
    );
};

export default Index;
