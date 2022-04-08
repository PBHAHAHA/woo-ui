import { createApp } from 'vue'
import App from './App.vue'
// import WooUI from "../packages/index"
import WooUI from '../build'

const app = createApp(App)
app.use(WooUI)
app.mount('#app')
