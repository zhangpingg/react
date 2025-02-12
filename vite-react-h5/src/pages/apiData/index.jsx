import React from 'react';
import { Button } from 'antd-mobile';
// @ts-ignore
import { apiAuditList } from '@/api/approvalCenter';
import { apiTireMenu } from '@/api/precisePickTire';

const Index = () => {
    const fn1 = async () => {
        const _params = { current: 1, size: 10, status: 1 };
        const res = await apiAuditList(_params);
        console.log('数据: ', res);
    };
    const fn2 = async () => {
        const res = await apiTireMenu();
        console.log('数据：', res);
    };

    return (
        <div>
            <Button size="mini" color="primary" onClick={fn1}>
                质管PC-接口
            </Button>
            <br />
            <br />
            <Button size="mini" color="primary" onClick={fn2}>
                H5-接口
            </Button>
        </div>
    );
};

export default Index;
