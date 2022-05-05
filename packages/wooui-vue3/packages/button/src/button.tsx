import { defineComponent, SetupContext, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import useButton from './hooks/use-button'
import { iconProps } from '../../icon/src/icon-types'
import './button.scss';

const wButton = defineComponent({
  name: 'WButton',
  props: buttonProps,
  emits: ['click'],
  setup(props: ButtonProps, ctx: SetupContext) {
    const { slots } = ctx
    const { icon, disabled, loading } = toRefs(props)
    const { classes, iconClass } = useButton(props, ctx)

    const onClick = (e: MouseEvent) => {
      if (loading.value) {
        return
      }
      ctx.emit('click', e)
    }
    console.log(iconProps)
    return () => (
      <button class={classes.value} disabled={disabled.value} onClick={onClick}>
        {
          icon.value ? <i class={`iconfont ${iconProps.classPrefix.default}-${icon.value}`}></i> : ''
        }
        <span class='button-content'>{slots.default?.()}</span>
      </button>
    )
  }
})

export default wButton