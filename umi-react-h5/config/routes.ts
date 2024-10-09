export default [
    {
        path: '/',
        component: '@/layouts',
        routes: [
            { path: '/', redirect: '/home' },
            { path: '/home', component: '@/pages/home', exact: true },
            { path: '/test', component: '@/pages/test', exact: true },
            {
                path: '/antdMobile',
                component: '@/pages/antdMobile',
                exact: true,
            },
            {
                path: '/reactRedux',
                component: '@/pages/reactRedux',
                exact: true,
            },
            {
                path: '/dva',
                component: '@/pages/dva',
                exact: true,
            },
            {
                path: '/apiData',
                component: '@/pages/apiData',
                exact: true,
            },
        ],
    },
];
