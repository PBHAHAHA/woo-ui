import { App } from '@vue/runtime-core'
import TreeInstall, { Tree } from './tree'
const installs = [
  TreeInstall
]
export {
  Tree
}
export default {
  version: '0.0.1',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}