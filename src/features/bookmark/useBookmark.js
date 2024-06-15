import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookmark } from "../../service/apiBookmark";

export function useBookmark() {
  const queryClient = useQueryClient();
  const {
    data: bookmark,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookmark"],
    queryFn: () => getBookmark(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmark"] });
    },
  });
  return { bookmark, isLoading, error };
}
