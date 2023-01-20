<script setup>
import { h } from "vue";

const section = (props, { slots }) => {
  return h(
    "div",
    {
      class: ["section", props.className],
      style: { padding: props.padding },
    },
    slots
  );
};

const container = ({ slots }) => {
  return h(
    "div",
    {
      class: "container",
      style: { width: "1200px" },
    },
    slots
  );
};
</script>

<template>
  <header></header>
  <main>
    <section className="hero" padding="80px 0">
      <container></container>
    </section>
  </main>
  <footer></footer>
</template>

<style scoped>
</style>
