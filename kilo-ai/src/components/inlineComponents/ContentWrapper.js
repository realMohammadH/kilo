import { h } from "vue";
const contentWrapper = (props, { slots }) => {
  return h(
    "div",
    {
      class: "content-wrapper",
      style: {
        textAlign: props.align,
        width: "550px",
        // margin: "0 auto",
      },
    },
    [slots.sectionTitle(), slots.sectionSubTitle(), slots.sectionDescription()]
  );
};

export default contentWrapper;
