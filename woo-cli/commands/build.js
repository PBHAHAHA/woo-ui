// 增加全量构建脚本
const path = require('path')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryDir = path.resolve(__dirname, '../../packages')
const outputDir = path.resolve(__dirname, '../../build')

// 打包配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
// 全量构建
const buildAll = async () => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'wooui',
        fileName: 'wooui',
        formats: ['es', 'umd']
      },
      outDir: outputDir
    }
  }))
}

const buildLib = async () => {
  await buildAll()
}

buildLib()