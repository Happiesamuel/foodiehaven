import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark as addBookmarkApi } from "../../service/apiBookmark";
// import toast from "react-hot-toast";

export function useAddBookmark() {
  const queryClient = useQueryClient();
  const {
    mutate: addBookmark,
    isLoading: isCreating,
    status,
  } = useMutation({
    mutationFn: (bookmark) => addBookmarkApi(bookmark),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmark"] });
    },
  });
  return { addBookmark, isCreating, status };
}
