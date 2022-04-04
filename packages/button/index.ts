// button的出口
import { App } from '@vue/runtime-core'
import wButton from './index'
const WButton = {
  install: (app: App) => {
    console.log(app)
    app.component('wButton', wButton)
  }
}

export default WButton