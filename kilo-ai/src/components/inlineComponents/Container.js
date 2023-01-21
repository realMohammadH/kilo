import { h } from "vue";
const container = (props, { slots }) => {
  return h(
    "article",
    {
      class: "container",
      style: {
        width: "1200px",
        height: "100%",
        margin: "0 auto",
      },
    },
    slots.default()
  );
};

export default container;
