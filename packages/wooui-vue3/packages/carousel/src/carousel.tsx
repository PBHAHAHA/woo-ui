import { defineComponent, renderSlot, useSlots } from "vue";
import './carousel.scss'
import usePage from "./hooks/use-page";

import {carouselProps,CarouselProps} from './carousel-types'

export default defineComponent({
  name: 'DCarousel',
  props: carouselProps,
  setup(props: CarouselProps) {
    // 获取插槽内容的元素数量
    const count = useSlots().default().length
    const {pageIndex, prevPage, nextPage, setPageIndex } = usePage(1, count)
    
    // 生成指示器数组
    const  indicaorArr = Array.from(new Array(count).keys())
    console.log(indicaorArr)
    return () => {
      return <div class="woo-carousel">
        {/* 容器 */}
        <div class="woo-carousel-item-container" style={{
          width: count*100+'%',
          left: -(pageIndex.value-1) * 100 + '%'
        }}>
          {renderSlot(useSlots(), 'default')}
        </div>
        <div class="woo-carousel-pagination">
          <button class="arrow arrow-left" onClick={prevPage}>
            <svg width="18px" height="18px" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#293040" fill-rule="nonzero" points="10.7071068 12.2928932 9.29289322 13.7071068 3.58578644 8 9.29289322 2.29289322 10.7071068 3.70710678 6.41421356 8"></polygon></g></svg>
          </button>
          <button class="arrow arrow-right" onClick={nextPage }>
            <svg width="18px" height="18px" viewBox="0 0 16 16" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#293040" fill-rule="nonzero" transform="translate(8.146447, 8.000000) scale(-1, 1) translate(-8.146447, -8.000000) " points="11.7071068 12.2928932 10.2928932 13.7071068 4.58578644 8 10.2928932 2.29289322 11.7071068 3.70710678 7.41421356 8"></polygon></g></svg>
          </button>
        </div>
        {/* 新增指示器 */}
        <div class="woo-carousel-indicator">
          {
            indicaorArr.map((item, index) => {
              return <div 
                class={`woo-carousel-indicator-item${pageIndex.value === index+1 ? ' active' : ''}`}
                onClick={() => setPageIndex(index + 1)}
                ></div>
            })
          }
        </div>
      </div>
    }
  }
})