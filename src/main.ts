import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAwesomePaginate from 'vue-awesome-paginate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)
app.mount('#app')
