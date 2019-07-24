import {Carousel,CarouselItem} from 'element-ui'
const element={
  install:function(Vue){
    Vue.use(Carousel);
    Vue.use(CarouselItem);
  }
}
export default element