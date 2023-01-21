<script setup>
import { defineProps } from "vue";
const props = defineProps({
  flow: {
    required: false,
    default: "row",
  },
  justifyContent: {
    required: false,
    default: "space-between",
  },
});
</script>

<template>
  <div
    class="flex"
    :style="{ flexDirection: props.flow, justifyContent: props.justifyContent }"
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