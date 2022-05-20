import Theme from 'vitepress/dist/client/theme-default'
import { Button } from '../../../packages/button/index'
import { Icon } from '../../../packages/icon/index'
import { Tree } from '../../../packages/tree/index'
import { Carousel } from '../../../packages/carousel/index'
import { Loading } from '../../../packages/loading/index'
// import '../../../../node_modules/remixicon/fonts/remixicon.css'
import 'vitepress-theme-demoblock/theme/styles/index.css'

// console.log(Loading.render)

import { registerComponents } from './register-components'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('w-tree', Tree)
    app.component('w-button', Button)
    app.component('w-icon', Icon)
    app.component('w-carousel', Carousel)
    app.directive('loading', Loading)
    registerComponents(app)
  }
}