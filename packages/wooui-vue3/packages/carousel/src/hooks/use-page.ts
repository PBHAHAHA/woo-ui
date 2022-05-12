import {ref} from 'vue'
import {carouselProps} from '../carousel-types'
/**
 * 
 * @param defaultPageIndex 默认显示索引
 * @param count 总共多少元素
 * @returns 
 */
export default function usePage(defaultPageIndex = 1, count:number) {
  // 当前页码
  const pageIndex = ref(defaultPageIndex)
  // 跳到第几页
  const setPageIndex = (current: number) => {
    pageIndex.value = current
  }
  // 一次性往前或往后跳几页
  const jumpPage = (page: number) => {
    pageIndex.value += page
    if(pageIndex.value == 0) {
      pageIndex.value = count
    }
    if(pageIndex.value > count) {
      pageIndex.value = 1
    }
  }

  // 上一页
  const prevPage = () => {
    if(pageIndex.value == 1 && !carouselProps.cycle) return
    jumpPage(-1)
  }
  // 下一页
  const nextPage = () => {
    if(pageIndex.value == count && !carouselProps.cycle) return
    jumpPage(1)
  }

  return {
    pageIndex, setPageIndex, jumpPage, prevPage, nextPage
  }

}