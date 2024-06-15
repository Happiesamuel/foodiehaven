import { useQuery } from "@tanstack/react-query";
import { getSearchRecipe } from "../../service/apiRecipies";
import { useSearch } from "../../context/SearchResultContext";

export function useSearchQuery() {
  const { searchData } = useSearch();
  const {
    isLoading: isSearching,
    data: result,
    error,
  } = useQuery({
    queryKey: ["search", searchData],
    queryFn: async () => {
      const data = await getSearchRecipe(searchData);
      return searchData === "" ? null : data;
    },
  });
  return { isSearching, result, error };
}
