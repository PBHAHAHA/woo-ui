import type { ComputedRef, ExtractPropTypes, PropType } from "vue"

export type WButtonSize = 'lg' | 'md' | 'sm' | 'mn'
export type WButtonType = 'primary' | 'success' | 'warning' | 'danger'

export const buttonProps = {
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<WButtonSize>,
    default: 'md'
  },
  type: {
    type: String as PropType<WButtonType>
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export interface UseButtonReturnType {
  classes: ComputedRef<{
    [key: string]: string | boolean
  }>;
  iconClass: ComputedRef<string>
}