import { h } from "vue";
const imageWrapper = (props, { slots }) => {
  return h(
    "figure",
    {
      class: "image-wrapper",
      style: {
        padding: props.padding,
        width: props.figureWidth,
        height: props.figureHeight,
      },
    },
    slots.default()
  );
};

export default imageWrapper;
