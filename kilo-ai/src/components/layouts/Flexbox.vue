<script setup>
import { defineProps } from "vue";
const props = defineProps({
  flow: {
    required: false,
  },
  justifyContent: {
    required: false,
  },
  padding: {
    type: String,
  },
  alignItems: {
    type: String,
  },
  gap: {
    type: String,
  },
});
</script>

<template>
  <div
    class="flex"
    :style="{
      flexDirection: props.flow,
      justifyContent: props.justifyContent,
      padding: props.padding,
      alignItems: props.alignItems,
      gap: props.gap,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>