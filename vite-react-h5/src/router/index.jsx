import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
const ModalScrollInIOSH5 = lazy(() => import('../pages/modalScrollInIOSH5/index.jsx')); // IOS：弹框中滚动内容，影响了父页面滚动【H5移动端】
const RouteJumpParamIndex = lazy(() => import('../pages/routeJumpParam/index.jsx')); // 路由跳转传参-首页
const RouteJumpParamDetails = lazy(() => import('../pages/routeJumpParam/details.jsx')); // 路由跳转传参-详情页
const WxAuthorizeAuthorize = lazy(() => import('../pages/wxAuthorize/authorize.jsx')); // 微信授权登录-授权页 (微信公众号)
const WxAuthorizeHome = lazy(() => import('../pages/wxAuthorize/home.jsx')); // 微信授权登录-授权成功后首页 (微信公众号)

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
                    <Route path="/routeJumpParam-index" element={<RouteJumpParamIndex />} />
                    <Route path="/routeJumpParam-details" element={<RouteJumpParamDetails />} />
                    <Route path="/wxAuthorize-authorize" element={<WxAuthorizeAuthorize />} />
                    <Route path="/wxAuthorize-home" element={<WxAuthorizeHome />} />
                    <Route path="*" element={<Err404 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Index;
