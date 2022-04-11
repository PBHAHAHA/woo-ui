import { computed, SetupContext } from "vue";
import { ButtonProps, UseButtonReturnType, WButtonType } from "../button-types";



export default function useButton(props: ButtonProps, ctx: SetupContext): UseButtonReturnType {
  const hasContent = computed(() => ctx.slots.default);
  const colorMap = {

  }
  const iconClass = computed(() => '1')
  // const defaultColor = colorMap[]
  const classes = computed(() => ({
    'woo-btn': true,
    [`woo-btn-primary`]: true
  }))
  return {
    classes,
    iconClass
  }
}