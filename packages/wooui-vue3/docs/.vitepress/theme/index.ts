import Theme from 'vitepress/dist/client/theme-default'
// import {Button} from '../../../packages/button/button'
import { Tree } from '../../../packages/tree/index'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'

export default {
  ...Theme,
  enhanceApp({ app }) {
    // app.component('w-button', Button)
    app.component('w-tree', Tree)
    registerComponents(app)
  }
}