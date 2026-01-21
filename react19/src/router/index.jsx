import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// components
const UpdateTitle = lazy(() => import('../components/updateTitle/index.jsx')); // 更新标题
const Loading = lazy(() => import('../components/loading/index.jsx')); // loading

// pages
const Home = lazy(() => import('../pages/home/index.jsx')); // home
const Test = lazy(() => import('../pages/test/index.jsx')); // test
const Err404 = lazy(() => import('../pages/err/404.jsx')); // 404
const Demo1 = lazy(() => import('../pages/demo1/index.jsx')); // demo1

const Index = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <UpdateTitle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/demo1" element={<Demo1 />} />
                    <Route path="*" element={<Err404 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Index;
