import { defineComponent, ref } from 'vue'

const wButton = defineComponent({
  setup(props, { slots }) {
    const id = ref(0)
    return () => (
      <button v-model={id.value}>
        {slots.default && slots.default}
      </button>
    )
  }
})

export default wButton