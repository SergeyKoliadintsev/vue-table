<script setup lang="ts">
import { ref, computed } from "vue";
import useTable from "@/hooks/useTable";

const selectColumn = ref(["Name", "Age", "Created On", "Percent", "Actions"]);

const columns = [
  {
    label: "Name",
    field: "name",
    sortable: false,
  },
  {
    label: "Age",
    field: "age",
    type: "number",
    sortable: false,
  },
  {
    label: "Created On",
    field: "createdAt",
    type: "date",
    dateInputFormat: "yyyy-MM-dd",
    dateOutputFormat: "MMM do yy",
    sortable: false,
  },
  {
    label: "Percent",
    field: "score",
    type: "percentage",
    sortable: false,
  },
  {
    label: "TEST1",
    field: "test1",
    sortable: false,
  },
  {
    label: "TEST2",
    field: "test2",
    sortable: false,
  },
  {
    label: "Actions",
    field: "actions",
    sortable: false,
  },
];
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
const selectedColumns = ref(["Name", "Age"]);

const { dynamicColumns, loadMore, table_fef } = useTable(
  columns,
  selectedColumns,
  rows
);

const checkSelectedRows = () => {
  console.log(table_fef.value.selectedRows);
};

const clicks = (data: any) => console.log(data);
</script>

<template>
  <div>
    <button @click="checkSelectedRows">Check Selected Rows</button>
    <div>
      <div v-for="column in selectColumn" :key="column">
        <input
          type="checkbox"
          :id="column"
          :value="column"
          v-model="selectedColumns"
        />
        <label :for="column">{{ column }}</label>
      </div>
    </div>

    <vue-good-table
      ref="table_fef"
      :columns="dynamicColumns"
      :rows="rows"
      :select-options="{
        enabled: true,
        disableSelectInfo: true,
        selectOnCheckboxOnly: true,
      }"
    >
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
