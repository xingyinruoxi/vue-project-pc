export default [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "home" */ './../views/HomePage')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ './../views/AboutPage')
    }
]