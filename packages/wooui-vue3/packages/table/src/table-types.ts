import { PropType } from "vue";

export const TableProps = {
  data: {
    type: Array as PropType<Record<string, any>[]>,
    default: []
  },
  
}