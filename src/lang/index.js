import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEn from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZh from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import elementEs from 'element-ui/lib/locale/lang/es' // element-ui lang
import en from './locales/en'
import zh from './locales/zh'
import es from './locales/es'

Vue.use(VueI18n)

const messages = {
    en: {
        ...en,
        ...elementEn
    },
    zh: {
        ...zh,
        ...elementZh
    },
    es: {
        ...es,
        ...elementEs

    }
}

const i18n = new VueI18n({
    // options: en | zh | es
    locale: Cookies.get('language') || 'zh',
    // set locale messages
    messages
})

export default i18n