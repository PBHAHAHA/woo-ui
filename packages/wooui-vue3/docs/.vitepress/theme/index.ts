import Theme from 'vitepress/dist/client/theme-default'
import { Button } from '../../../packages/button/index'
import { Icon } from '../../../packages/icon/index'
import { Tree } from '../../../packages/tree/index'
// import '../../../../node_modules/remixicon/fonts/remixicon.css'
import 'vitepress-theme-demoblock/theme/styles/index.css'

import { registerComponents } from './register-components'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('w-tree', Tree)
    app.component('w-button', Button)
    app.component('w-icon', Icon)
    registerComponents(app)
  }
}