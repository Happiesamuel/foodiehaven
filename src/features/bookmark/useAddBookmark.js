import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark as addBookmarkApi } from "../../service/apiBookmark";
// import toast from "react-hot-toast";

export function useAddBookmark() {
  const queryClient = useQueryClient();
  const { mutate: addBookmark, isLoading: isCreating } = useMutation({
    mutationFn: (bookmark) => addBookmarkApi(bookmark),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmark"] });
    },
  });
  return { addBookmark, isCreating };
}
