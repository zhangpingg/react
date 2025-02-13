import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/index.jsx')); // home
const Test = lazy(() => import('../pages/test/index.jsx')); // test
const AntdMobile = lazy(() => import('../pages/antdMobile/index.jsx')); // antd-mobile
const Antd = lazy(() => import('../pages/antd/index.jsx')); // antd
const ReactRedux = lazy(() => import('../pages/reactRedux/index.jsx')); // reactRedux
const RequestData = lazy(() => import('../pages/requestData/index.jsx')); // 接口请求
const PxToRem = lazy(() => import('../pages/pxToRem/index.jsx')); // px -> rem

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/antdMobile" element={<AntdMobile />} />
                <Route path="/antd" element={<Antd />} />
                <Route path="/reactRedux" element={<ReactRedux />} />
                <Route path="/requestData" element={<RequestData />} />
                <Route path="/pxToRem" element={<PxToRem />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;
