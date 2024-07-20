import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookmark as deleteBookmarkApi } from "../../service/apiBookmark";
import toast from "react-hot-toast";

export function useDeleteBookmark() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteBookmark,
    isLoading: isDeleting,
    status,
  } = useMutation({
    mutationFn: (id) => deleteBookmarkApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmark"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteBookmark, isDeleting, status };
}
