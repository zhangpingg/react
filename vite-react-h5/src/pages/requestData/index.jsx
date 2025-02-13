import React from 'react';
import { Button } from 'antd-mobile';
import { apiTireCount } from '@/api/precisePickTire';

const Index = () => {
    const fn1 = async () => {
        const params = {
            current: 1,
            size: 1000,
            selectedTireList: [],
        };
        const res = await apiTireCount(params);
        console.log('数据：', res);
    };

    return (
        <div>
            <Button size="mini" color="primary" onClick={fn1}>
                H5-接口
            </Button>
        </div>
    );
};

export default Index;
