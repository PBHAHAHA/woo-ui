import { defineComponent, toRefs } from 'vue';
import { iconProps, IconProps } from './icon-types';
import "../../../styles/font/iconfont.css"
export default defineComponent({
  name: 'WIcon',
  props: iconProps,
  setup(props: IconProps) {
    const { name, size, color, classPrefix } = toRefs(props);

    return () => {
      console.log(name.value)
      return /^((https?):)?\/\//.test(name.value) ? (
        <img
          src={name.value}
          alt={name.value.split('/')[name.value.split('/').length - 1]}
          style={{
            width: size.value,
            verticalAlign: 'text-bottom'
          }}
        />
      ) : (
        <span>
          <i
            class={`iconfont ${classPrefix.value} ${classPrefix.value}-${name.value}`}
            style={{
              fontSize: size.value,
              color: color.value
            }}
          ></i>
        </span>

      );
    };
  }
});
