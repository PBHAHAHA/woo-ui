import type { App } from 'vue'
import Tree from './src/tree'
Tree.install = function (app: App): void {
  app.component(Tree.name)
}

export { Tree }

// 按需引入时的导出
export default {
  title: 'Tree 树',
  category: '数据展示',
  status: '1%',
  install(app: App): void {
    app.use(Tree as any)
  }
}