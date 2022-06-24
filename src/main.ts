import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(store).use(router)
app.mount('#app')
