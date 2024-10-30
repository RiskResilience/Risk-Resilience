import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

// 导入自定义的语言文件
import enLocale from './locales/en.json'
import zhLocale from './locales/zh.json'

const messages = {
    en: {
        ...enLocale,
        el: en.el, // Element Plus 的英文语言包
    },
    zh: {
        ...zhLocale,
        el: zhCn.el, // Element Plus 的中文语言包
    }
}

const i18n = createI18n({
    locale: 'zh', // 设置默认语言
    fallbackLocale: 'en', // 设置备用语言
    messages,
})

const app = createApp(App)

app.use(i18n)
app.use(ElementPlus, {
    locale: i18n.global.messages[i18n.global.locale].el,
})
app.use(router)
app.mount('#app')