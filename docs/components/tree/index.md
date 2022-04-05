# 树 Tree



:::demo 使用`size`、`style`属性定义Card的样式
  ```vue
  <template>
  <w-tree :data="data"></w-tree>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: '1',
        level: 1,
        children: [
          {
            label: '1-1',
            level: 2,
            children: [
              {
                level: 3,
                label: '1-1-1'
              }
            ]
          }
        ]
      },
      {
        label: '2',
        level: 1,
        children: [
          {
            level: 2,
            label: '2-1',
          }
        ]
      }
    ])

    return {
      data
    }
  }
})
</script>
  ```
:::