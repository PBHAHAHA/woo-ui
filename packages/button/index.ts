// button的出口
import { App } from '@vue/runtime-core'
import wButton from './button.tsx'
const WButton = {
  install: (app: App) => {
    app.component('wButton', wButton)
  }
}

export default WButton