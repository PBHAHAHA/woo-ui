// button的出口
import { App } from '@vue/runtime-core'
import Button from './src/button'
Button.install = function(app: App): void {
  app.component(Button.name, Button)
}

export { Button }

// 按需引入时的导出
export default {
  title: 'Button 按钮',
  category: '通用',
  status: '1%',
  install(app: App): void {
    app.use(Button as any)
  }
}