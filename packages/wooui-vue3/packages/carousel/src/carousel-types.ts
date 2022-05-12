import type {ExtractPropTypes, PropType} from 'vue'


export const carouselProps = {
  defaultIndex: {
    type: Number,
    default: 1
  },
  cycle: {
    type: Boolean,
    default: true
  }
}
export type CarouselProps = ExtractPropTypes<typeof carouselProps>