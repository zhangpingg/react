import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Loading = lazy(() => import('../pages/loading/index.jsx')); // loading
const Home = lazy(() => import('../pages/home/index.jsx')); // home
const Test = lazy(() => import('../pages/test/index.jsx')); // test
const Err404 = lazy(() => import('../pages/err/404.jsx')); // 404
const AntdMobile = lazy(() => import('../pages/antdMobile/index.jsx')); // antd-mobile
const Antd = lazy(() => import('../pages/antd/index.jsx')); // antd
const ReactRedux = lazy(() => import('../pages/reactRedux/index.jsx')); // reactRedux
const RequestData = lazy(() => import('../pages/requestData/index.jsx')); // 接口请求
const PxToRem = lazy(() => import('../pages/pxToRem/index.jsx')); // px -> rem

const Index = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/antdMobile" element={<AntdMobile />} />
                    <Route path="/antd" element={<Antd />} />
                    <Route path="/reactRedux" element={<ReactRedux />} />
                    <Route path="/requestData" element={<RequestData />} />
                    <Route path="/pxToRem" element={<PxToRem />} />
                    <Route path="*" element={<Err404 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Index;
