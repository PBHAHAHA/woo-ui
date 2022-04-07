import { defineComponent, toRefs } from "vue"
import { treeProps, TreeProps, TreeItem } from "./tree-types"
import IconOpen from './components/icon-close'
import IconClose from './components/icon-open'
import useToggle from './hooks/use-toggle'
import './tree'

export default defineComponent({
  name: 'WTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, ctx) {
    const { data } = toRefs(props)
    const { openedData, toggle } = useToggle(data.value)
    console.log(data.value)
    // 增加缩进的展位元素
    const Indent = () => {
      return <span style="display: inline-block;width: 16px;height: 16px;"></span>
    }
    const renderNode = (item) => {
      return (
        <div
          class={['woo-tree-node', item.open && 'woo-tree-node__open']}
          style={{ paddingLeft: `${24 * (item.level - 1)}px` }}
        >
          <div class="woo-tree-node__content">
            <div class="woo-tree-node__content--value-wrapper">
              <span style={{ paddingLeft: 20 * (item.level - 1) + 'px' }} class="woo-tree-node__title">
                {
                  item.children
                    ? item.open
                      ? <IconClose onClick={() => toggle(item)} />
                      : <IconOpen onClick={() => toggle(item)} />
                    : <Indent />
                }
                <span class="woo-trr-node__title">{item.label}</span>
              </span>
            </div>
          </div>
        </div>
      )
    }
    console.log(openedData)
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