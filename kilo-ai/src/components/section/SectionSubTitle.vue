<script setup>
import { defineProps } from "vue";
const props = defineProps({
  fontSize: {
    type: String,
    default: "40px",
  },
});
</script>

<template>
  <h2 class="sectionSubTitle" :style="{ fontSize: props.fontSize }">
    <slot></slot>
  </h2>
</template>

<style scoped>
.sectionSubTitle {
  color: var(--secondary-color);
  font-weight: bold;
  letter-spacing: -0.32px;
  margin-bottom: 14px;
  line-height: 48px;
  font-size: 40px;
}
</style>