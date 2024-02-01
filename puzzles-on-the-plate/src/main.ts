import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from './router'

import VueGtag from 'vue-gtag'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {createI18n} from "vue-i18n";

const app = createApp(App)

import pl from "@/locales/pl.json";
const i18n = createI18n({
    locale: navigator.language.slice(0, 2),
    fallbackLocale: "pl",
    messages: { pl },
    legacy: false
})

app.use(createPinia())
app.use(router)
app.use(i18n);
app.use(VueGtag, {
    appName: "Puzzle na talerzu",
    pageTrackerScreenviewEnabled: true,
    config: {id: "G-4425VJFX6X"}
}, router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
