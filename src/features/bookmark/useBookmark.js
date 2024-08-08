import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookmark } from "../../service/apiBookmark";
import { useUser } from "../authentication/useUser";

export function useBookmark() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { custom } = user?.user_metadata || user.user.user_metadata;

  const {
    data: bookmark,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookmark"],
    queryFn: () => getBookmark(custom),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmark"] });
    },
  });
  return { bookmark, isLoading, error };
}
