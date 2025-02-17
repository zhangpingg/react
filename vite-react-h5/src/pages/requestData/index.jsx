import React from 'react';
import { Button } from 'antd-mobile';
import { apiTireCount, apiStoreappMonthRank } from '@/api/precisePickTire';

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
    const fn2 = async () => {
        const res = await apiStoreappMonthRank();
        console.log('数据：', res);
    };

    return (
        <div>
            <Button size="mini" color="primary" onClick={fn1}>
                获取商品数量
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={fn2}>
                获取门店月榜
            </Button>
            <br />
        </div>
    );
};

export default Index;
