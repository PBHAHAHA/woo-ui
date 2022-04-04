import { App } from '@vue/runtime-core'
import wButton from './button'
const install = (app: App) => {
  console.log(app)
  app.use(wButton)
}

const WooUI = {
  install,
}

export { wButton }

export default WooUI