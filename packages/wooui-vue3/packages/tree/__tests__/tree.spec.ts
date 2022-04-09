// 定义一个测试套
// describe('tree', () => {
//   it('tree should render corrently', () => {
//     // 期望（expect）tree组件的class里面包含（toContain）'devui-tree'
//     // expect(wrapper.classes()).toContain('woo-tree')
//     // // 期望tree的子元素数量为6
//     // expect(wrapper.element.childElementCount).toBe(6)
//     expect(1).toEqual(1)
//   })
// })

import { mount } from '@vue/test-utils'
import WTree from '../src/tree'

describe('tree', () => {
  it('should render corrently', () => {
    const wrapper = mount({
      components: { WTree },
      template: `
        <w-tree :data="data"></w-tree>
      `,
      setup() {
        const data = [{
          label: '一级 1', level: 1,
          children: [{
            label: '二级 1-1', level: 2,
            children: [{
              label: '三级 1-1-1', level: 3,
            }]
          }]
        }]

        return {
          data
        }
      }
    })
    expect(wrapper.classes()).toContain('woo-tree')
  })


})