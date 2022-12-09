import { ref, computed } from "vue";

export default function useTable({
  loadMoreFunc,
}: {
  loadMoreFunc: () => void;
}) {
  const table_ref = ref();
  const search = ref("");
  const search2 = computed(() => search);

  const loadMore = () => {
    loadMoreFunc();
  };

  return {
    loadMore,
    table_ref,
    search,
    search2,
  };
}
