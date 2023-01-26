<script setup>
import { defineProps } from "vue";
const props = defineProps(["marginBottom"]);
</script>
<template>
  <p
    class="sectionDescription"
    :style="{ marginBottom: props['marginBottom'] }"
  >
    <slot></slot>
  </p>
</template>

<style scoped>
.sectionDescription {
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.16px;
}
</style>