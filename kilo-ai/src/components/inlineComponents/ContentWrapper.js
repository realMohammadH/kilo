import { h } from "vue";
const contentWrapper = (props, { slots }) => {
  return h(
    "article",
    {
      class: "content-wrapper",
      style: {
        textAlign: props.contentAlign,
        width: "550px",
        // margin: "0 auto",
        padding: props.contentPadding,
      },
    },
    [slots.sectionTitle(), slots.sectionSubTitle(), slots.sectionDescription()]
  );
};

export default contentWrapper;
