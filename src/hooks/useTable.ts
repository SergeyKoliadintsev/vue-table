import { ref, computed } from "vue";

export default function useTable({
  loadMoreFunc,
}: {
  loadMoreFunc: () => void;
}) {
  const table_ref = ref();
  const search = ref("");

  const loadMore = () => {
    loadMoreFunc();
  };

  return {
    loadMore,
    table_ref,
    search,
  };
}
