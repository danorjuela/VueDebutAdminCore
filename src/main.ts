// Vue imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Style
import './scss/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 

// App Components
import App from './App.vue'
import router from './router'

// Vue instance

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
