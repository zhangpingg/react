/*
 * @Author: zhangping
 * @Date: 2025-02-11 14:06:46
 * @Description: 菜单名称-模块名称
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
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
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('wxAuthorize-authorize')}>
                微信授权（只有代码，本地不能测试）
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('previewImg')}>
                预览图片
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('domToImage')}>
                DOM转换为图片
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('scrollListH5')}>
                无线滚动
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('stickyLayout')}>
                粘性布局
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('ellipsisText')}>
                省略号（单行、多行、更多等）
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('inputKeyboard')}>
                安卓手机-点击输入框，被键盘挡住问题
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('pageLoad')}>
                分页加载更多
            </Button>
            <br />
            <Button size="mini" color="primary" onClick={() => jumpPage('twoTableScrollLinkage')}>
                2个Table横向滚动，互相联动
            </Button>
        </div>
    );
};

export default Index;
