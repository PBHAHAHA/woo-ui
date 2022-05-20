import { defineComponent, h, render, VNode } from 'vue';
import Loading from './loading'
import { BindingType, LoadingOptions, TargetHTMLElement } from './loading-types'

function createComponent(component: any, props: any, children: any = null): VNode['component'] {
  const vnode = h(component, { ...props }, children)
  const container = document.createElement('div')
  render(vnode, container)
  return vnode.component
}

const handleProps = (el: TargetHTMLElement, vprops: LoadingOptions | null) => {
  const props = {
    ...new LoadingOptions(),
    ...vprops
  }

  const loadingTemplateRef = props.loadingTemplateRef;

  const loadingInstance = createComponent(
    loadingConstructor,
    { ...props }
  )

}

const toggleLoading = (el: TargetHTMLElement,binding: BindingType) => {
  if(binding.value) {
    console.log(el, binding)
  }
}


const loadingDirective = {
  mounted: function(el: TargetHTMLElement,binding,vnode: VNode):void {
    // handleProps(el, vnode.props);
    console.log(el, binding, vnode)
    const props = {
      ...vnode.props
    }
    handleProps(el, props)
    toggleLoading(el, binding)
    // console.dir({...props});
    // const loadingInstance =  createComponent(
    //   defineComponent(Loading),
    //   {...props}
    // )
    // el.style.position = props.positionType
    // el.options = props;
    // el.instance = loadingInstance;
    // el.instance.proxy?.open?.()
    // el.appendChild(el.mask)
    // handleProps(el, vnode.props)
    // console.log(el,binding,vnode)
    console.log("第一次加载 loading", vnode)
  },
  updated() {
    console.log("更新后加载 loading")
  }
}

export default loadingDirective