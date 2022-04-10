import type { PropType, ExtractPropTypes } from "vue"

export type TreeItem = {
  label: string
  children?: TreeData
  disableToggle?: boolean
  [key: string]: any
}
export type TreeData = Array<TreeItem>

// export TreeData
export const treeProps = {
  data: {
    type: Array as PropType<TreeData>,
    required: true
  }
} as const
// as const  是为了确保treeProps 内部的数据不被改变
export type TreeProps = ExtractPropTypes<typeof treeProps>
