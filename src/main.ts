import { createApp } from 'vue'
import App from './App.vue'
// import WooUI from "../packages/index"
// import Tree from '../build/tree'
import WooUI from 'vue_woo_ui'

const app = createApp(App)
app.use(WooUI)
app.mount('#app')
