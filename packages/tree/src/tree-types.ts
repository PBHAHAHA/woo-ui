import type { PropType, ExtractPropTypes } from "vue"

type Tdata = {
  label: string;
  children: TreeData
}
type TreeData = Array<Tdata>

// export TreeData
export const treeProps = {
  data: {
    type: Array as PropType<TreeData>,
    required: true
  }
} as const
// as const  是为了确保treeProps 内部的数据不被改变
export type TreeProps = ExtractPropTypes<typeof treeProps>