import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/main.css'

import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
