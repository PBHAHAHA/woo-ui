import { App } from '@vue/runtime-core'
import WButton from './button'
import WTree from './tree'
const install = (app: App) => {
  app.use(WButton)
  app.use(WTree)
}

const WooUI = {
  install,
}

export { WButton, WTree }

export default WooUI