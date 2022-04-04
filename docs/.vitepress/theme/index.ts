import Theme from 'vitepress/dist/client/theme-default'
import Button from '../../../wooui/button/button'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('w-button', Button)
    registerComponents(app)
  }
}