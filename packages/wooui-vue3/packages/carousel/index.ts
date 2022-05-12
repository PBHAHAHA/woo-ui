
import { App } from "vue";
import Carousel from "./src/carousel";

Carousel.install = function(app:App):void{
  app.component(Carousel.name, Carousel)
}

export {Carousel}

export default{
  title: 'Carousel 轮播',
  category: '通用',
  status: '1%',
  install(app: App): void {
    app.use(Carousel as any)
  }
}