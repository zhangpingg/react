/*
 * @Author: zhangping
 * @Date: 2025-02-11 14:06:46
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd-mobile';

const Index = () => {
    const navigate = useNavigate();

    const jumpPage = (path) => {
        navigate(`/${path}`);
        //navigate(-1);
    };

    return (
        <div>
            <Button size="mini" color="primary" onClick={() => jumpPage('test')}>
                test
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('antdMobile')}>
                antd-mobile
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('antd')}>
                antd
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('reactRedux')}>
                reactRedux
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('requestData')}>
                接口请求
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('pxToRem')}>
                px =》 rem
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('modalScrollInIOSH5')}>
                IOS：弹框中滚动内容，影响了父页面滚动【H5移动端】
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('routeJumpParam-index')}>
                路由跳转传参
            </Button>
        </div>
    );
};

export default Index;
