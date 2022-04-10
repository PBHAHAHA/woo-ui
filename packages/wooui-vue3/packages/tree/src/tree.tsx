import { defineComponent, toRefs } from "vue"
import { treeProps, TreeProps, TreeItem } from "./tree-types"
import IconClose from './components/icon-close'
import IconOpen from './components/icon-open'
import useToggle from './hooks/use-toggle'
import './tree.scss'

export default defineComponent({
  name: 'WTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, ctx) {
    const { data } = toRefs(props)
    const { openedData, toggle } = useToggle(data.value)
    // 增加缩进的展位元素
    const Indent = () => {
      return <span style="display: inline-block;width: 16px;height: 16px;"></span>
    }

    // 节点左侧的收起展开图标
    const renderIcon = (item: TreeItem) => {
      return item.children
        ? <span class={item.disableToggle && 'toggle-disabled'}>
          {
            item.open
              ? <IconClose onClick={() => toggle(item)} />
              : <IconOpen onClick={() => toggle(item)} />
          }
        </span>
        : <Indent />
    }

    const renderNode = (item) => {
      return (
        <div
          class={[
            'woo-tree-node',
            item.open && 'woo-tree-node__open',
            item.level !== 1 && 'woo-tree-node__children'
          ]}
        >
          <div class="woo-tree-node__content">
            <div class="woo-tree-node__content--value-wrapper">
              <span class="woo-tree-node__folder">
                {renderIcon(item)}
              </span>
              <span class="woo-tree-node__title">{item.label}</span>
            </div>
          </div>
        </div>
      )
    }
    return () => {
      return (
        <div class="woo-tree">
          {openedData.value.map((item: TreeItem) => {

            return renderNode(item)
          })}
        </div>
      )
    }
  }
})