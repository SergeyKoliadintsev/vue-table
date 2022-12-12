<script setup lang="ts">
import { watch, computed } from "vue";
// @ts-ignore
import useTable from "../../hooks/useTable";
import FormInput from "../FormInput.vue";
// @ts-ignore
import { validate, length } from "@/validation";

const props = defineProps({
  title: { type: String, required: true },
  length: { type: String, required: true },
});

const emit = defineEmits<{
  (event: "loadMoreEmit"): void;
  (event: "addActionEmit"): void;
  (event: "searchEmit", search: string): void;
}>();

const loadData = () => {
  emit("loadMoreEmit");
};

const addAction = () => {
  emit("addActionEmit");
};

const { loadMore, search } = useTable({
  loadMoreFunc: loadData,
});

watch(search, () => emit("searchEmit", search));

const searchValid = computed(() => {
  return validate(search.value, [length({ min: 1, max: 10 })]);
});
</script>

<template>
  <div class="table">
    <div class="header">
      <span class="header_title">{{ props.title }}</span>
      <div class="header_title_length">
        <span>{{ props.length }}</span>
      </div>
      <div class="search">
        <FormInput
          name="Search"
          v-model="search"
          :status="{ valid: true, message: '' }"
          :plaseholder="'Search...'"
          type="text"
        >
          <template v-slot:icon-left>🔥</template>
        </FormInput>
      </div>
      <div>
        <div>
          <button>Filter list</button> <button>FILTER</button>
          <button @click="addAction">Actions</button>
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

.header_title {
  font-size: 20px;
  font-weight: 700;
  color: #4d5e80;
}

.loadMoreS {
  display: flex;
  justify-content: center;
}
</style>
