import Loading from './loading'
import { TargetHTMLElement } from './loading-types'


const loadingDirective = {
  mounted(el: TargetHTMLElement,binding,vnode):void {
    console.log(el,binding,vnode)
    console.log("第一次加载 loading")
  },
  updated() {
    console.log("更新后加载 loading")
  }
}

export default loadingDirective