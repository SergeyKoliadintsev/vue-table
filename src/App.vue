<script setup lang="ts">
import { ref, computed } from "vue";
import TableVueVue from "./components/Table/TableVue.vue";

const selectColumn = ref(["Name", "Age", "Created On", "Percent", "Actions"]);

const columns = [
  {
    label: "Name",
    field: "name",
  },
  {
    label: "Age",
    field: "age",
    type: "number",
  },
  {
    label: "Created On",
    field: "createdAt",
    type: "date",
    dateInputFormat: "yyyy-MM-dd",
    dateOutputFormat: "MMM do yy",
  },
  {
    label: "Percent",
    field: "score",
    type: "percentage",
  },
  {
    label: "TEST1",
    field: "test1",
  },
  {
    label: "TEST2",
    field: "test2",
  },
  {
    label: "Actions",
    field: "actions",
  },
];

const checkbox = ref([]);

let testColumn = computed(() => {
  return (
    columns.filter((el: any) => {
      for (let i = 0; i < 5; i++) {
        if (el.label === checkbox.value[i]) {
          return el;
        }
      }
    }) || []
  );
});

const loadMore = () => {
  rows.value?.push(...rows.value);
  console.log("rows", rows);
};

const rows = ref([
  {
    id: 1,
    name: "John",
    age: 20,
    createdAt: "2011-10-31",
    score: 0.03343,
    test1: "gdsag1",
    test2: "fsadgasdg",
  },
  {
    id: 2,
    name: "Jane",
    age: 24,
    createdAt: "2011-10-31",
    score: 0.03343,
    test1: "gdsag1",
    test2: "fsadgasdg",
  },
  {
    id: 3,
    name: "Susan",
    age: 16,
    createdAt: "2011-10-30",
    score: 0.03343,
    test1: "gdsag1",
    test2: "fsadgasdg",
  },
  {
    id: 4,
    name: "Chris",
    age: 55,
    createdAt: "2011-10-11",
    score: 0.03343,
    test1: "gdsag1",
    test2: "fsadgasdg",
  },
  {
    id: 5,
    name: "Dan",
    age: 40,
    createdAt: "2011-10-21",
    score: 0.03343,
    test1: "gdsag1",
    test2: "fsadgasdg",
  },
  {
    id: 6,
    name: "John",
    age: 20,
    createdAt: "2011-10-31",
    score: 0.03343,
    test1: "gdsag1",
    test2: "fsadgasdg",
  },
]);

const clicks = (data: any) => console.log(data);
</script>

<template>
  <div>
    <h1>Hello</h1>
    <div>
      <div v-for="column in selectColumn" :key="column">
        <input
          type="checkbox"
          :id="column"
          :value="column"
          v-model="checkbox"
        />
        <label :for="column">{{ column }}</label>
      </div>
    </div>

    <vue-good-table :columns="testColumn" :rows="rows">
      <template v-slot:table-row="props">
        <span v-if="props.column.field == 'age'">
          <span style="font-weight: bold; color: blue"
            >{{ props.row.age }}
          </span>
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
        <span v-if="props.column.field == 'actions'">
          <span>
            <button @click="clicks(props.row)">Trulala</button>
          </span>
        </span>
      </template>
      <template v-slot:table-actions-bottom>
        <button @click="loadMore">Load more</button>
      </template>
    </vue-good-table>
  </div>
</template>

<style scoped></style>
