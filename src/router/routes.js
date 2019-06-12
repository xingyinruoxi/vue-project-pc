export default [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "home" */ './../views/Home')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ './../views/About')
    }
]