import { ref } from "vue";

export default function useTable({
  loadMoreFunc,
}: {
  loadMoreFunc?: () => void;
}) {
  const table_ref = ref();
  const search = ref("");

  const loadMore = () => {
    loadMoreFunc && loadMoreFunc();
  };

  return {
    loadMore,
    table_ref,
    search,
  };
}
