import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang' //国际化

import './assets/less/reset.less' //重置样式表
import * as filters from './utils/filters' // global filters

Vue.config.productionTip = false

Vue.use(ElementUI, {
    size: 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
});

// register global utility filters.
Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')