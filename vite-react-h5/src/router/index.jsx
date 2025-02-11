import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/index.jsx')); // home
const Test = lazy(() => import('../pages/test/index.jsx')); // test
const AntdMobile = lazy(() => import('../pages/antdMobile/index.jsx')); // antd-mobile
const Antd = lazy(() => import('../pages/antd/index.jsx')); // antd

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/antdMobile" element={<AntdMobile />} />
                <Route path="/antd" element={<Antd />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;
