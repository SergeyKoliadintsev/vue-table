// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  rows: {
    type: Array,
    required: true,
  },
  columns: { type: Array, required: true },
});
</script>

<template>
  <div>
    <h1>Hello</h1>
    <vue-good-table :columns="props.columns" :rows="props.rows">
      <slot />
    </vue-good-table>
  </div>
</template>
