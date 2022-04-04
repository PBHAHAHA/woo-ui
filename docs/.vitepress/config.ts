import demoBlock from 'vitepress-theme-demoblock'
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button/' }
      ]
    },
    {
      text: '导航'
    },
    {
      text: '反馈'
    },
    {
      text: '数据录入'
    },
    {
      text: '布局'
    }
  ]
}

const config = {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 这里可以使用markdown-it 插件，vitepress-theme-demoblock
      const { demoBlockPlugin } = demoBlock
      md.use(demoBlockPlugin)
    }
  }
}

export default config