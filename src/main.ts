import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'

import router from './router'
import jQuery from 'jquery'
window.jQuery = jQuery
window.$ = jQuery

const app = createApp(App)

app.use(router)

app.mount('#app')
