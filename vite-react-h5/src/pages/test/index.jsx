import React, { useEffect } from 'react';
import { Toast } from 'antd-mobile';

const Index = () => {
    useEffect(() => {
        Toast.show('报错了');
    }, []);

    return <div>test</div>;
};

export default Index;
