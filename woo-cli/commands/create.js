import inquirer from "inquirer";
import { red } from "kolorist";

const CREATE_TYPES = [
  'component',
  'lib-entry'
]
const DOCS_CATEGORIES = [
  '通用', '导航', '反馈', '数据录入', '数据展示', '布局'
]

export async function onCreate(cmd = {}) {
  console.log(cmd);
  let { type } = cmd

  if (!type) {
    const result = await inquirer.prompt([
      {
        name: 'type',
        type: 'list',
        message: '(必填) 请选择创建类型：',
        choices: CREATE_TYPES,
        default: 0
      }
    ])
    type = result.type
  }

  if (CREATE_TYPES.every((t) => type !== t)) {
    console.log(
      red(
        ` 当前component类型仅支持：${CREATE_TYPES.join(',')},请重新输入`
      ));
  }

  try {
    switch (type) {
      case 'component':
        const info = await inquirer.prompt([
          {
            name: 'name',
            type: 'input',
            message: '(必填) 请选择组件name, 将用作目录及文件名称：',
            validate: (value) => {
              if (value.trim() === '') {
                return '组件 name 是必填项！'
              }
              return true
            }
          },
          {
            name: 'title',
            type: 'input',
            message: '（必填）请输入组件中文名称，将用作文档列表显示：',
            validate: (value) => {
              if (value.trim() === '') {
                return '组件名称是必填项！'
              }
              return true
            }
          },
          {
            name: 'category',
            type: 'list',
            message: '（必填）请选择组件分类，将用作文档列表分类：',
            choices: DOCS_CATEGORIES,
            default: 0
          }
        ])
        createComponent(info)
        break;
      case 'lib-entry':
        createLibEntry()
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(red('❌') + error.toString())
    process.exit(1)
  }
}


function createComponent(info) {
  console.log(info);
}

function createLibEntry() {
  console.log('create lib-entry file');
}