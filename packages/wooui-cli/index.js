#! /usr/bin/env node
// 上面的这句代码是环境解释器
import { Command } from 'commander'
import { onCreate } from './commands/create'


const program = new Command()

program
  .command('create')
  .description('')
  .option('-t --type <type>', "类型信息")
  .action(onCreate)

// 执行命令行参数解析
program.parse();