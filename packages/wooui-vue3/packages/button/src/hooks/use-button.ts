import { computed, SetupContext } from "vue";
import { ButtonProps, UseButtonReturnType, WButtonType } from "../button-types";



export default function useButton(props: ButtonProps, ctx: SetupContext): UseButtonReturnType {
  const hasContent = computed(() => ctx.slots.default);
  console.log(ctx.slots.default)
  const colorMap = {

  }
  const iconClass = computed(() => '1')
  const defaultColor = props.type
  const classes = computed(() => ({
    'woo-btn': true,
    [`woo-btn-${props.type}`]: true,
    [`woo-btn-${props.size}`]: true,
    'woo-btn-icon-wrap': props.icon
  }))
  return {
    classes,
    iconClass
  }
}