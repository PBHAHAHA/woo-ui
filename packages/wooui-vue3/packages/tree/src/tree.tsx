import { defineComponent, toRefs } from "vue"
import { treeProps, TreeProps, TreeItem } from "./tree-types"
import IconClose from './components/icon-close'
import IconOpen from './components/icon-open'
import useToggle from './hooks/use-toggle'
import useHighlightNode from "./hooks/use-highlight"
import './tree.scss'

export default defineComponent({
  name: 'WTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, { slots }) {
    const { data, checkable } = toRefs(props)
    const { openedData, toggle } = useToggle(data.value)
    const { nodeClassNameRef, handleClickOnNode, handleInitNodeClassNameRef } = useHighlightNode()
    // 增加缩进的展位元素
    const Indent = () => {
      return <span style="display: inline-block;width: 16px;height: 16px;"></span>
    }

    // 节点左侧的收起展开图标
    const renderIcon = (item: TreeItem) => {
      return item.children
        ? <span
          class={item.disableToggle && 'toggle-disabled'}
          onClick={() => toggle(item)}>
          {
            slots.icon
              ? slots.icon(item)
              : item.open
                ? <IconClose />
                : <IconOpen />
          }
        </span>
        : <Indent />
    }

    const renderNode = (item) => {
      const { key = '', label, disabled, open, level } = item
      const nodeId = handleInitNodeClassNameRef(disabled, key, label)
      return (
        <div
          class={[
            'woo-tree-node',
            open && 'woo-tree-node__open',
            level !== 1 && 'woo-tree-node__children'
          ]}
        >
          <div
            class={['woo-tree-node__content', nodeClassNameRef.value[nodeId]]}
            onClick={() => handleClickOnNode(nodeId)}>
            <div class="woo-tree-node__content--value-wrapper">
              <span class="woo-tree-node__folder">
                {renderIcon(item)}
              </span>
              {checkable.value && <input v-model={item.checked} type="checkbox"></input>}
              <span class={["woo-tree-node__title", item.disabled && 'select-disabled']}>{label}</span>
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