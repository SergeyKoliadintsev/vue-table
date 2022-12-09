<script setup lang="ts">
// @ts-ignore
import useTable from "../../hooks/useTable";

const emit = defineEmits<{
  (event: "loadMoreEMit"): void;
}>();

const props = defineProps({
  title: { type: String, required: true },
  length: { type: String, required: true },
});

const loadData = () => {
  emit("loadMoreEMit");
};

const { loadMore } = useTable({
  loadMoreFunc: loadData,
});
</script>

<template>
  <div class="table">
    <div class="header">
      <div class="header_title_length">
        <span>{{ props.title }}</span>
        <span>{{ props.length }}</span>
      </div>
      <div class="search">
        <slot name="search" />
      </div>
      <div>
        <div>
          <button>Filter list</button> <button>FILTER</button>
          <button>Actions</button>
        </div>
      </div>
    </div>

    <div class="tableWrapper">
      <slot />
      <div class="loadMoreS">
        <button @click="loadMore">Load more</button>
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
  gap: 30px;
}
.tableWrapper {
  padding: 0 30px 30px 30px;
  background-color: #fafbfc;
  border-radius: 0px 0px 20px 20px;
}

.loadMoreS {
  display: flex;
  justify-content: center;
}
</style>
