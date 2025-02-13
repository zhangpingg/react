import { isAndroid, isIOS } from 'react-device-detect';

const useClearIosScroll = (props) => {
    const { forbidList = [], scrollList = [] } = props;

    // 阻止默认事件
    const preventDefault = (e) => {
        e.preventDefault();
    };
    // 设置滚动位置
    const setScrollPosition = (dom) => {
        const currentScrollTop = dom.scrollTop;
        if (currentScrollTop < 1) {
            dom.scrollTop = 1;
        }
        if (dom.clientHeight + dom.scrollTop >= dom.scrollHeight) {
            dom.scrollTop = dom.scrollTop - 1;
        }
    };
    // 添加touchmove
    const addTouchmove = () => {
        if (isAndroid) {
            return false;
        }
        const forbidDomList = forbidList.map((classNameStr) => {
            return document.querySelector(classNameStr);
        });
        forbidDomList.map((dom) => {
            if (dom) {
                dom.addEventListener('touchmove', preventDefault, {
                    passive: false,
                });
            }
        });
        const scrollDomList = scrollList.map((classNameStr) => document.querySelector(classNameStr));
        scrollDomList.map((dom) => {
            if (dom) {
                if (dom.scrollHeight > dom.clientHeight) {
                    // 初次打开弹框的时候，初始化数据，滚动条置为1
                    dom.style.overflow = 'scroll';
                    dom.scrollTop = 1;
                    dom.addEventListener('scroll', () => {
                        setScrollPosition(dom);
                    });
                } else {
                    const bodyDom = document.querySelector('body');
                    if (bodyDom) {
                        bodyDom.style.overflow = 'hidden';
                    }
                }
            }
        });
    };
    // 移除touchmove
    const removeTouchmove = () => {
        if (isAndroid) {
            return false;
        }
        const forbidDomList = forbidList.map((classNameStr) => {
            return document.querySelector(classNameStr);
        });
        forbidDomList.map((dom) => {
            if (dom) {
                dom.removeEventListener('touchmove', preventDefault, {
                    passive: false,
                });
            }
        });
        const scrollDomList = scrollList.map((item) => document.querySelector(item));
        scrollDomList.map((dom) => {
            if (dom) {
                if (dom.scrollHeight > dom.clientHeight) {
                    dom.removeEventListener('scroll', setScrollPosition);
                } else {
                    const bodyDom = document.querySelector('body');
                    if (bodyDom) {
                        bodyDom.style.overflow = 'auto';
                    }
                }
            }
        });
    };

    return {
        addTouchmove,
        removeTouchmove,
    };
};

export default useClearIosScroll;
