// i18n
import i18n from './locales'
// vue router
import router from '@/router/index'
// pinia
import store from '@/store'
import App from './App.vue'

import 'virtual:windi.css'
// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import '@/assets/styles/index.scss'
import 'virtual:windi-devtools'

const app = createApp(App)

app.use(router).use(store)

app.use(i18n)

app.mount('#app')
