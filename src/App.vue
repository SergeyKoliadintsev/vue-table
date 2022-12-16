<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import useTable from "@/hooks/useTable";
import TableWrapper from "./components/Table/TableWrapper.vue";

const { t, locale } = useI18n({ useScope: "global" });

const columns = computed(() => [
  {
    label: t("table.headers.name"),
    field: "name",
    sortable: false,
  },
  {
    label: t("table.headers.age"),
    field: "age",
    type: "number",
    sortable: false,
    tdClass: "text-align-center",
    // width: "10%",
  },
  {
    label: t("table.headers.createdOn"),
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
    label: t("table.headers.percent"),
    field: "score",
    type: "percentage",
    sortable: false,
    width: "10%",
    tdClass: "text-align-center",
    thClass: "text-align-center",
  },

  {
    label: t("table.headers.actions"),
    field: "actions",
    sortable: false,
    tdClass: "text-align-center",
    thClass: "text-align-center",
  },
]);

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

const loadMore = () => {
  rows.value?.push(...rows.value);
};

const addAdmin = () => {
  console.log("Add Admin", table_ref.value.selectedRows);
};

const { table_ref, search } = useTable({});

const handleSearch = (data: any) => {
  return (search.value = data);
};

const switchLang = () => {
  locale.value === "en" ? (locale.value = "es") : (locale.value = "en");
  localStorage.setItem("lang", locale.value);
};

const clicks = (data: any) => console.log(data);
</script>

<template>
  <div>
    <div class="switch-button-container">
      <button @click="switchLang">{{ t("switchLang") }}</button>
    </div>

    <div class="app-wrapper-ggg">
      <TableWrapper
        :title="t('table.head.title')"
        :length="`${rows.length} Administrators`"
        @load-more-emit="loadMore"
        @add-action-emit="addAdmin"
        @search-emit="handleSearch"
      >
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
              <button
                @click="clicks(props.row)"
                class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                {{ t("action") }}
              </button>
            </span>
            <span v-if="props.column.field == 'test1'">
              <span>
                {{ props.row.age }}
              </span>
            </span>
          </template>
        </vue-good-table>
      </TableWrapper>
    </div>
  </div>
</template>

<style lang="scss">
.app-wrapper-ggg {
  background: #f5f6f7;
  padding: 30px;
}
</style>
