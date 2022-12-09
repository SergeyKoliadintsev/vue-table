import { ref } from "vue";

export default function useTable(columns, rows, loadMoreFunc) {
  const table_ref = ref();
  const search = ref("");

  const loadMore = () => {
    loadMoreFunc();
    rows.value?.push(...rows.value);
  };

  return {
    loadMore,
    table_ref,
    search,
  };
}
