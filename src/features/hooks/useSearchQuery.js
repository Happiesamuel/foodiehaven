import { useQuery } from "@tanstack/react-query";
import { getSearchRecipe } from "../../service/apiRecipies";
// import { useSearch } from "../../context/SearchResultContext";
import { useSearchParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

export function useSearchQuery() {
  // const { searchData } = useSearch();
  const [searchParams] = useSearchParams();
  const searchData = searchParams.get("search");
  const {
    isLoading: isSearching,
    data: result,
    error,
  } = useQuery({
    queryKey: ["search", searchData],
    queryFn: () => getSearchRecipe(searchData),
  });
  console.log(result);
  return { isSearching, result, error };
}
