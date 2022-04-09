// 增加全量构建脚本
const path = require('path')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryDir = path.resolve(__dirname, '../../packages')
const outputDir = path.resolve(__dirname, '../../build')

const fsExtra = require('fs-extra')

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
      rollupOptions,
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

// 单组件按需构建
const buildSingle = async (name) => {
  console.log(path.resolve(entryDir,name),'====')
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outputDir, name)
    }
  }))
}
// 生成组件的package.json文件
const createPackageJson = (name) => {
  const fileStr = `{
    "name": "${name}",
    "version": "0.0.0",
    "main": "index.umd.js",
    "module": "index.es.js",
    "style": "style.css"
  }`
  fsExtra.outputFile(
    path.resolve(outputDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}

const buildLib = async () => {
  await buildAll()
  // 打包单个组件 
  // 获取组件名称组成的数组
  console.log('123')
  console.log(fs.readdirSync(entryDir))
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name)
    console.log(componentDir)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes("index.ts")
  })
  for(const name of components) {
    console.log(name,'------')
    await buildSingle(name)
    // 生成组件的package.json 文件
    createPackageJson(name)
  }
}

buildLib()