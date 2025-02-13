import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pathToTitleMap } from '@/router/const.js';

const Index = () => {
    const location = useLocation();

    // 更新标题
    const updateTitle = () => {
        document.title = pathToTitleMap[location.pathname.replace('/', '')] || '首页';
    };

    useEffect(() => {
        updateTitle();
    }, [location.pathname]);

    return null;
};

export default Index;
