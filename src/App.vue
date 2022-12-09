<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import useTable from "@/hooks/useTable";
import TheTableHeaderVue from "./components/Table/TheTableHeader.vue";

const testRows = [
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
    score: 234343.0334343,
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
];

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
    tdClass: "text-align-center",
    // width: "10%",
  },
  {
    label: "Created On",
    field: "createdAt",
    type: "date",
    dateInputFormat: "yyyy-MM-dd",
    dateOutputFormat: "MMM do yy",
    sortable: false,
    tdClass: "text-align-center",
    thClass: "text-align-center",
    // width: "25%",
  },
  {
    label: "Percent",
    field: "score",
    type: "percentage",
    sortable: false,
    width: "10%",
    tdClass: "text-align-center",
    thClass: "text-align-center",
  },

  {
    label: "Actions",
    field: "actions",
    sortable: false,
    tdClass: "text-align-center",
    thClass: "text-align-center",
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
    score: 234343.0334343,
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

const loadFunc = () => {
  console.log("LOAD MORE ....");
};

const { loadMore, table_ref } = useTable(columns, rows, loadFunc);

const search = ref("");

const clicks = (data: any) => console.log(data);
</script>

<template>
  <div>
    <TheTableHeaderVue
      title="Test table"
      :length="`${rows.length} Administrators`"
      :search="search"
    >
      <input type="text" v-model="search" />
    </TheTableHeaderVue>
    <div class="tableWrapper">
      <vue-good-table
        ref="table_ref"
        :columns="columns"
        :rows="rows"
        :select-options="{
          enabled: true,
          disableSelectInfo: true,
          selectOnCheckboxOnly: true,
        }"
        :search-options="{
          enabled: true,
          externalQuery: search,
        }"
      >
        >
        <template v-slot:table-row="props">
          <span v-if="props.column.field == 'age'">
            <span
              :style="{
                'font-weight': 'bold',
                color:
                  props.row.age % 3 === 2
                    ? 'blue'
                    : props.row.age % 3 === 0
                    ? 'red'
                    : 'green',
              }"
            >
              {{ props.row.age }}
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
          <span v-if="props.column.field == 'test1'">
            <span>
              {{ props.row.age }}
            </span>
          </span>
        </template>
      </vue-good-table>
      <div class="loadMoreS">
        <button @click="loadMore">Load more</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
