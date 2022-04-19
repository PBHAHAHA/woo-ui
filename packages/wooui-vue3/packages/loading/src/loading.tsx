import { CSSProperties, defineComponent, ref } from "vue"
import { loadingProps, LoadingProps } from './loading-types'

import './loading.scss'

export default defineComponent({
  name: 'WLoading',
  inheritAttrs: false,
  props: loadingProps,
  setup(props: LoadingProps) {
    const style: CSSProperties = {
      top: props.view.top,
      left: props.view.left,
      zIndex: props.zIndex
    }
    if (!props.message) {
      style.background = 'none'
    }
    const isShow = ref(false)
    const open = () => {
      isShow.value = true
    }

    const close = () => {
      isShow.value = false
    }

    return {
      style,
      isShow,
      open,
      close
    }
  },
  render() {
    const {
      isShow,
      isFull,
      backdrop,
      style,
      message,
      $slots
    } = this

    return (
      isShow &&
      <div class={['woo-loading-contanier', isFull ? 'woo-loading--full' : '']}>
        {
          $slots.default?.() ||
          <div class="woo-loading-wrapper">
            {
              backdrop
                ? <div class="woo-loading-mask"></div>
                : null
            }
            <div style={style} class="woo-loading-area">
              <div class="woo-busy-default-spinner">
                <div class="woo-loading-bar1"></div>
                <div class="woo-loading-bar2"></div>
                <div class="woo-loading-bar3"></div>
                <div class="woo-loading-bar4"></div>
              </div>
              {
                message
                  ? <span class="woo-loading-text">{message}</span>
                  : null
              }
            </div>
          </div>
        }
      </div>
    )
  }
})