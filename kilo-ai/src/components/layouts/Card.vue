<script setup>
import Flexbox from "./Flexbox.vue";
import { defineProps } from "vue";

const props = defineProps(["contentPadding", "backgroundColor", "cardHeight"]);
</script>
<template>
  <flexbox class="card" flow="column" :style="{ height: props['cardHeight'] }">
    <slot name="image-icon"></slot>

    <div
      class="card-content"
      :style="{
        padding: props['contentPadding'],
        background: props['backgroundColor'],
      }"
    >
      <slot name="title"></slot>
      <slot name="description"></slot>
    </div>
  </flexbox>
</template>
<style>
.card-content {
  height: 50%;
}
</style>