import { Button } from 'antd';
import { apiAuditList } from '@/api/approvalCenter';

const Index = () => {
    const fn1 = async () => {
        const _params = { current: 1, size: 10, status: 1 };
        const res = await apiAuditList(_params);
        console.log('数据: ', res);
    };

    return (
        <div>
            <Button type="primary" onClick={fn1}>
                调接口
            </Button>
        </div>
    );
};

export default Index;
