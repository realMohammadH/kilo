"use strict";
import { h } from "vue";
const container = (props, { slots }) => {
  return h(
    "article",
    {
      class: "container",
      style: {
        maxWidth: "1200px",
        height: "100%",
        margin: "0 auto",
        padding: props.containerPadding,
        background: props.containerBackGround,
      },
    },
    slots
  );
};

export default container;
