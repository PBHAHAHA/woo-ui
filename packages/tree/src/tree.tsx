import { defineComponent, toRefs } from "vue"
import { treeProps, TreeProps } from "./tree-types"
import IconOpen from '../assets/open.svg'
import IconClose from '../assets/close.svg'

export default defineComponent({
  name: 'WTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, ctx) {
    const { data } = toRefs(props)
    // const { openedData, toggle } = useToggle(data.value)
    // 增加缩进的展位元素
    const Indent = () => {
      return <span style="display: inline-block;width: 16px;height: 16px;"></span>
    }
    const renderNode = (item) => {
      return (
        <div class={['woo-tree-node']}>
          <div class="woo-tree-node__content--value-wrapper">
            <span style={{ paddingLeft: 20 * (item.level - 1) + 'px' }} class="woo-tree-node__title">
              {
                item.children ? <IconClose style="display: inline-block;width: 16px;height: 16px;" /> : <Indent />
              }
              {item.label}
            </span>
          </div>
        </div>
      )
    }

    const renderTree = (tree) => {
      return tree.map((item: any) => {
        if (item.children) {
          return (
            <>
              {renderNode(item)}
              {renderTree(item.children)}
            </>
          )
        }
        return renderNode(item)
      })
    }

    return () => {
      return (
        <div class="woo-tree">
          {renderTree(data.value)}
        </div>
      )
    }
  }
})