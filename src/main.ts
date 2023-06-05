import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// Shoelace
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
import './css/main.css'

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
