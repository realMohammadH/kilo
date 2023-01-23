<script setup>
import { defineProps } from "vue";
const props = defineProps({
  fontSize: {
    type: String,
  },
  lineHeight: {
    type: String,
  },
});
</script>

<template>
  <h2
    class="sectionSubTitle"
    :style="{ fontSize: props.fontSize, lineHeight: props.lineHeight }"
  >
    <slot></slot>
  </h2>
</template>

<style scoped>
.sectionSubTitle {
  color: var(--secondary-color);
  font-weight: bold;
  letter-spacing: -0.32px;
  margin-bottom: 14px;
  line-height: 40px;
  font-size: 32px;
}
</style>