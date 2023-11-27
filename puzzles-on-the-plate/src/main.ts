import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueGtag from 'vue-gtag'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGtag, {
    appName: "Puzzle na talerzu",
    pageTrackerScreenviewEnabled: true,
    config: {id: "G-4425VJFX6X"}
})
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
