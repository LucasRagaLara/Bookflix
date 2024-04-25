import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './input.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router)

app.mount('#app')