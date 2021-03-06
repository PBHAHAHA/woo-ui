import { App } from 'vue'
// import Loading from './src/loading'
import Loading from './src/loading-directive';
// import LoadingService from './src/loading-service';
export * from './src/loading-types';
// export {
//   LoadingService,
//   Loading
// };
export { Loading }
export default {
  title: 'Loading 加载提示',
  category: '反馈',
  status: '0',
  install(app: App): void {
    app.directive('Loading', Loading);
    // app.component(Loading.name, Loading);
  }
}