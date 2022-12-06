import { ref, computed } from "vue";

export default function useTable(columns, selectedColumns, rows) {
  const table_fef = ref();

  const loadMore = () => {
    rows.value?.push(...rows.value);
    console.log("rows", rows);
  };

  const dynamicColumns = computed(() => {
    return (
      columns.filter((el: any) => {
        for (let i = 0; i < 5; i++) {
          if (el.label === selectedColumns.value[i]) {
            return el;
          }
        }
      }) || []
    );
  });

  return {
    dynamicColumns,
    loadMore,
    table_fef,
  };
}
