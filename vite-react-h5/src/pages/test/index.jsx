import { useEffect } from 'react';
import './styles.less';

const Index = () => {
    useEffect(() => {
        const div = document.querySelector('.box');
        let startY = 0;
        div.addEventListener(
            'touchstart',
            (e) => {
                if (div.scrollHeight <= div.clientHeight) return;
                startY = e.touches[0].pageY;
            },
            { passive: false }
        );
        div.addEventListener(
            'touchmove',
            (e) => {
                if (div.scrollHeight <= div.clientHeight) return;
                const currentY = e.touches[0].pageY;
                const deltaY = currentY - startY;
                const maxScroll = div.scrollHeight - div.clientHeight;
                const currentScroll = div.scrollTop;
                // 顶部且下拉或底部且上拉时阻止默认
                if ((currentScroll <= 0 && deltaY > 0) || (currentScroll >= maxScroll && deltaY < 0)) {
                    e.preventDefault();
                }
                startY = currentY;
            },
            { passive: false }
        );
    }, []);

    return (
        <div className="box">
            <div className="box-main">test</div>
        </div>
    );
};

export default Index;
