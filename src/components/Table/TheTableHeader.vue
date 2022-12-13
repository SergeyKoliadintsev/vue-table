<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup lang="ts">
import { ref } from "vue";

const { title, length } = defineProps({
  title: { type: String, required: true },
  length: { type: String, required: true },
});
</script>

<template>
  <div class="header">
    <div class="header_title_length">
      <span>{{ title }}</span>
      <span>{{ length }}</span>
    </div>
    <div class="search">
      <slot />
    </div>
    <div>
      <div>
        <button>Filter list</button> <button>FILTER</button>
        <button>Actions</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 100px;
  border-radius: 20px 20px 0px 0px;
  border: 1px solid rgba(245, 246, 247, 1);
  background: #fafbfc;
  border-bottom: 2px solid #f2f3f5;
  display: flex;
  align-items: center;
  padding: 0 30px 0 40px;
  justify-content: space-between;
}

.header_title_length {
  color: rgba(77, 94, 128, 1);
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  display: flex;
}
</style>
