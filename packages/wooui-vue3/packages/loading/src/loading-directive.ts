import { defineComponent, h, render, VNode } from 'vue';
import Loading from './loading'
import { TargetHTMLElement } from './loading-types'

function createComponent(component: any, props: any, children: any = null): VNode['component'] {
  const vnode = h(component, { ...props }, children)
  const container = document.createElement('div')
  render(vnode, container)
  return vnode.component
}

const loadingDirective = {
  mounted(el: TargetHTMLElement,binding,vnode):void {
    const props = {
      ...vnode.props
    }
    // console.dir({...props});
    const loadingInstance =  createComponent(
      defineComponent(Loading),
      {...props}
    )
    console.log(loadingInstance)
    console.dir(el)
    el.style.position = props.positionType
    el.options = props;
    el.instance = loadingInstance;
    // handleProps(el, vnode.props)
    // console.log(el,binding,vnode)
    console.log("第一次加载 loading", vnode)
  },
  updated() {
    console.log("更新后加载 loading")
  }
}

export default loadingDirective