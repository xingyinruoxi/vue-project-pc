import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import en from './locales/en'
import zh from './locales/zh'
Vue.use(VueI18n)
const messages = {
    en: {
        ...en
    },
    zh: {
        ...zh
    }
}

const i18n = new VueI18n({
    // options: en | zh | es
    locale: Cookies.get('language') || 'zh',
    // set locale messages
    messages
})

export default i18n