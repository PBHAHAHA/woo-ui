# 按钮 Button


基础用法
:::demo 使用`size`、`style`属性定义Card的样式
  ```vue
  <template>
    <w-button style="marginRight: 10px;">确定</w-button>
    <w-button style="marginRight: 10px;" type="success">成功</w-button>
    <w-button style="marginRight: 10px;" type="danger">危险</w-button>
    <w-button style="marginRight: 10px;" type="warning">警告</w-button>
    <w-button style="marginRight: 10px;" type="text">警告</w-button>
  </template>
  ```
:::


尺寸用法
:::demo 使用`lg`、`md`、`sm`属性定义button的尺寸
  ```vue
  <template>
    <w-button style="marginRight: 10px;" size="lg">大型</w-button>
    <w-button style="marginRight: 10px;" size="md">中型</w-button>
    <w-button style="marginRight: 10px;" size="sm">小型</w-button>
  </template>
  ```
:::

禁用
:::demo 使用disabled属性定义button的尺寸
  ```vue
  <template>
    <w-button disabled style="marginRight: 10px;">确定</w-button>
    <w-button disabled style="marginRight: 10px;" type="success">成功</w-button>
    <w-button disabled style="marginRight: 10px;" type="danger">危险</w-button>
    <w-button disabled style="marginRight: 10px;" type="warning">警告</w-button>
    <w-button disabled style="marginRight: 10px;" type="text">警告</w-button>
  </template>
  ```
:::