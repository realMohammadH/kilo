"use strict";
import { h } from "vue";
const contentWrapper = (props, { slots }) => {
  return h(
    "article",
    {
      class: "content-wrapper",
      style: {
        textAlign: props.contentAlign,
        width: "550px",
        padding: props.contentPadding,
        marginBottom: props.margin,
      },
    },
    slots
  );
};

export default contentWrapper;
