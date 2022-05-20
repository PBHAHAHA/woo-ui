import { App } from 'vue'
import Table from './src/table'

export { Table };
export default {
  title: 'Table 表格',
  category: '',
  status: '0%',
  install(app:App): void {
    app.component(Table.name, Table)
    // app.component(Column.name, Column)
  }
}