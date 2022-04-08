import { defineComponent, ref, withDirectives, createVNode, vModelText } from "vue";
const wButton = defineComponent({
  setup(props, {
    slots
  }) {
    const id = ref(0);
    return () => withDirectives(createVNode("button", {
      "onUpdate:modelValue": ($event) => id.value = $event
    }, [slots.default && slots.default]), [[vModelText, id.value]]);
  }
});
const WButton = {
  install: (app) => {
    app.component("wButton", wButton);
  }
};
export { WButton as default };
