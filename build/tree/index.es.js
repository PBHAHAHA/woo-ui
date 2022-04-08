import { createVNode, ref, defineComponent, toRefs } from "vue";
const treeProps = {
  data: {
    type: Array,
    required: true
  }
};
const IconOpen = (props) => {
  return createVNode("svg", {
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ["svg-icon svg-icon-close", props.class]
  }, [createVNode("g", {
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("rect", {
    "x": "0.5",
    "y": "0.5",
    "width": "15",
    "height": "15",
    "rx": "2",
    "stroke": "#5e7ce0"
  }, null), createVNode("rect", {
    "x": "4",
    "y": "7",
    "width": "8",
    "height": "2",
    "fill": "#5e7ce0"
  }, null)])]);
};
const IconClose = (props) => {
  return createVNode("svg", {
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ["svg-icon", props.class]
  }, [createVNode("g", {
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("rect", {
    "x": "0.5",
    "y": "0.5",
    "width": "15",
    "height": "15",
    "rx": "2",
    "stroke": "#252b3a"
  }, null), createVNode("path", {
    "fill": "#252b3a",
    "d": "M8.75,4 L8.75,7.25 L12,7.25 L12,8.75 L8.749,8.75 L8.75,12 L7.25,12 L7.249,8.75 L4,8.75 L4,7.25 L7.25,7.25 L7.25,4 L8.75,4 Z"
  }, null)])]);
};
function useToggle(data) {
  const openedTree = (tree) => {
    return tree.reduce((acc, item) => {
      return item.open ? acc.concat(item, openedTree(item.children)) : acc.concat(item);
    }, []);
  };
  const openedData = ref(openedTree(data));
  const toggle = (item) => {
    if (!item.children)
      return;
    item.open = !item.open;
    openedData.value = openedTree(data);
  };
  return {
    openedData,
    toggle
  };
}
var Tree = defineComponent({
  name: "WTree",
  props: treeProps,
  emits: [],
  setup(props, ctx) {
    const {
      data
    } = toRefs(props);
    const {
      openedData,
      toggle
    } = useToggle(data.value);
    const Indent = () => {
      return createVNode("span", {
        "style": "display: inline-block;width: 16px;height: 16px;"
      }, null);
    };
    const renderNode = (item) => {
      return createVNode("div", {
        "class": ["woo-tree-node", item.open && "woo-tree-node__open"],
        "style": {
          paddingLeft: `${24 * (item.level - 1)}px`
        }
      }, [createVNode("div", {
        "class": "woo-tree-node__content"
      }, [createVNode("div", {
        "class": "woo-tree-node__content--value-wrapper"
      }, [createVNode("span", {
        "style": {
          paddingLeft: 20 * (item.level - 1) + "px"
        },
        "class": "woo-tree-node__title"
      }, [item.children ? item.open ? createVNode(IconClose, {
        "onClick": () => toggle(item)
      }, null) : createVNode(IconOpen, {
        "onClick": () => toggle(item)
      }, null) : createVNode(Indent, null, null), createVNode("span", {
        "class": "woo-trr-node__title"
      }, [item.label])])])])]);
    };
    return () => {
      return createVNode("div", {
        "class": "woo-tree"
      }, [openedData.value.map((item) => {
        return renderNode(item);
      })]);
    };
  }
});
Tree.install = function(app) {
  app.component(Tree.name, Tree);
};
var index = {
  title: "Tree \u6811",
  category: "\u6570\u636E\u5C55\u793A",
  status: "1%",
  install(app) {
    app.use(Tree);
  }
};
export { Tree, index as default };
