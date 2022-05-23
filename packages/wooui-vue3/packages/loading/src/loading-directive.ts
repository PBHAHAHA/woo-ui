import { defineComponent, h, render, VNode } from 'vue';
import Loading from './loading'
import { BindingType, LoadingOptions, TargetHTMLElement } from './loading-types'
const loadingConstructor = defineComponent(Loading)
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
  console.log('aaaaaaaaaaa',props)
  const loadingTemplateRef = props.loadingTemplateRef;

  const loadingInstance = createComponent(
    loadingConstructor,
    { ...props }
  )
  el.style.position = props.positionType;
  el.options = props;
  el.instance = loadingInstance;
  el.mask = loadingInstance?.proxy?.$el;
}
const unmount = (el: TargetHTMLElement) => {
  // cacheInstance.delete(el);
  el.instance.proxy.close();
  // unmountComponent(el.instance);
};

const toggleLoading = (el: TargetHTMLElement,binding: BindingType) => {
  if(binding.value) {
    console.log("xxxxxx",el.instance?.proxy)
    const vals = binding.value;
    el?.instance?.proxy?.open?.();
    el.appendChild(el.mask);
    if(vals){
      // Promise.all(vals)
      //   .catch(err => {
      //     console.error(new Error('Promise handling errors'), err);
      //   }).finally(()=>{
      //     unmount(el);
      //   })
    }
  }else{
    unmount(el);
  }
}

const removeAttribute = (el: TargetHTMLElement) => {
  el.removeAttribute('zindex');
  el.removeAttribute('positiontype');
  el.removeAttribute('backdrop');
  el.removeAttribute('message');
  el.removeAttribute('view');
  el.removeAttribute('loadingtemplateref');
};
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
  updated: function(el: TargetHTMLElement,binding,vnode: VNode):void {
    console.log("更新后加载 loading")
    removeAttribute(el);
    toggleLoading(el, binding)
  }
}

export default loadingDirective