import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// components
const UpdateTitle = lazy(() => import('../components/updateTitle/index.jsx')); // 更新标题
const Loading = lazy(() => import('../components/loading/index.jsx')); // loading

// pages
const Home = lazy(() => import('../pages/home/index.jsx')); // home
const Test = lazy(() => import('../pages/test/index.jsx')); // test
const Err404 = lazy(() => import('../pages/err/404.jsx')); // 404
const AntdMobile = lazy(() => import('../pages/antdMobile/index.jsx')); // antd-mobile
const Antd = lazy(() => import('../pages/antd/index.jsx')); // antd
const ReactRedux = lazy(() => import('../pages/reactRedux/index.jsx')); // reactRedux
const RequestData = lazy(() => import('../pages/requestData/index.jsx')); // 接口请求
const PxToRem = lazy(() => import('../pages/pxToRem/index.jsx')); // px -> rem
const ModalScrollInIOSH5 = lazy(() => import('../pages/modalScrollInIOSH5/index.jsx')); // IOS：弹框中滚动内容，影响了父页面滚动【antd-mobile】
const ModalScrollInIOSH5Two = lazy(() => import('../pages/modalScrollInIOSH5Two/index.jsx')); // IOS：弹框中滚动内容，影响了父页面滚动【better-scroll】
const RouteJumpParamIndex = lazy(() => import('../pages/routeJumpParam/index.jsx')); // 路由跳转传参-首页
const RouteJumpParamDetails = lazy(() => import('../pages/routeJumpParam/details.jsx')); // 路由跳转传参-详情页
const WxAuthorizeAuthorize = lazy(() => import('../pages/wxAuthorize/authorize.jsx')); // 微信授权登录-授权页 (微信公众号)
const WxAuthorizeHome = lazy(() => import('../pages/wxAuthorize/home.jsx')); // 微信授权登录-授权成功后首页 (微信公众号)
const PreviewImg = lazy(() => import('../pages/previewImg/index.jsx')); // 预览图片
const PreviewImgByAntdMobile = lazy(() => import('../pages/previewImgByAntdMobile/index.jsx')); // 预览图片（antd-mobile）
const DomToImage = lazy(() => import('../pages/domToImage/index.jsx')); // DOM转换为图片
const ScrollListH5 = lazy(() => import('../pages/scrollListH5/index.jsx')); // 无线滚动
const StickyLayout = lazy(() => import('../pages/stickyLayout/index.jsx')); // 粘性布局
const EllipsisText = lazy(() => import('../pages/ellipsisText/index.jsx')); // 省略号（单行、多行、更多等）
const InputKeyboard = lazy(() => import('../pages/inputKeyboard/index.jsx')); // 安卓手机-点击输入框，被键盘挡住问题
const PageLoad = lazy(() => import('../pages/pageLoad/index.jsx')); // 分页加载更多
const TwoTableScrollLinkage = lazy(() => import('../pages/twoTableScrollLinkage/index.jsx')); // 2个Table横向滚动，互相联动
const PhoneBook = lazy(() => import('../pages/phoneBook/index.jsx')); // 列表的分类显示和快速定位, 即电话簿
const CustomTableFixedRowScroll = lazy(() => import('../pages/customTableFixedRowScroll/index.jsx')); // 自定义表格，固定列滚动
const Vh = lazy(() => import('../pages/vh/index.jsx')); // vh高度，解决手机苹果浏览兼容问题
const HighlightText = lazy(() => import('../pages/highlightText/index.jsx')); // 高亮文本
const SafeArea = lazy(() => import('../pages/safeArea/index.jsx')); // 安全区域
const Flex = lazy(() => import('../pages/flex/index.jsx')); // flex 布局
const RemoveIOSspringBack = lazy(() => import('../pages/removeIOSspringBack/index.jsx')); // 去除IOS滚动时的回弹效果

const Index = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <UpdateTitle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/antdMobile" element={<AntdMobile />} />
                    <Route path="/antd" element={<Antd />} />
                    <Route path="/reactRedux" element={<ReactRedux />} />
                    <Route path="/requestData" element={<RequestData />} />
                    <Route path="/pxToRem" element={<PxToRem />} />
                    <Route path="/modalScrollInIOSH5" element={<ModalScrollInIOSH5 />} />
                    <Route path="/modalScrollInIOSH5Two" element={<ModalScrollInIOSH5Two />} />
                    <Route path="/routeJumpParam-index" element={<RouteJumpParamIndex />} />
                    <Route path="/routeJumpParam-details" element={<RouteJumpParamDetails />} />
                    <Route path="/wxAuthorize-authorize" element={<WxAuthorizeAuthorize />} />
                    <Route path="/wxAuthorize-home" element={<WxAuthorizeHome />} />
                    <Route path="/previewImg" element={<PreviewImg />} />
                    <Route path="/previewImgByAntdMobile" element={<PreviewImgByAntdMobile />} />
                    <Route path="/domToImage" element={<DomToImage />} />
                    <Route path="/scrollListH5" element={<ScrollListH5 />} />
                    <Route path="/stickyLayout" element={<StickyLayout />} />
                    <Route path="/ellipsisText" element={<EllipsisText />} />
                    <Route path="/inputKeyboard" element={<InputKeyboard />} />
                    <Route path="/pageLoad" element={<PageLoad />} />
                    <Route path="/twoTableScrollLinkage" element={<TwoTableScrollLinkage />} />
                    <Route path="/phoneBook" element={<PhoneBook />} />
                    <Route path="/customTableFixedRowScroll" element={<CustomTableFixedRowScroll />} />
                    <Route path="/vh" element={<Vh />} />
                    <Route path="/highlightText" element={<HighlightText />} />
                    <Route path="/safeArea" element={<SafeArea />} />
                    <Route path="/flex" element={<Flex />} />
                    <Route path="/removeIOSspringBack" element={<RemoveIOSspringBack />} />
                    <Route path="*" element={<Err404 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Index;
