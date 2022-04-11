import { defineComponent, SetupContext, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import useButton from './hooks/use-button'
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
    return () => (
      <button class={classes.value} disabled={disabled.value} onClick={onClick}>
        {/* {icon.value && } */}
        <span class='button-content'>{slots.default?.()}</span>
      </button>
    )
  }
})

export default wButton