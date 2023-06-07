import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Shoelace
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/')

// Bootstrap Grid Web Component
import '/node_modules/bootstrap-grid-webcomponents/dist/bootstrap-grid-webcomponents/bootstrap-grid-webcomponents.esm.js'

// CSS
import './css/main.scss'

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLeaf, faPlus, faTable } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faTable, faLeaf)


createApp(App)
  .use(createPinia())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
