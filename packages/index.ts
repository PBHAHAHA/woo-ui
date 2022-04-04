import { App } from '@vue/runtime-core'
import wButton from './button'
const install = (app: App) => {
  app.use(wButton)
}

const WooUI = {
  install,
}

export { wButton }

export default WooUI