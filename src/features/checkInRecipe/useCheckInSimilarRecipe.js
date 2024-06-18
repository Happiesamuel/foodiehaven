import { useQuery } from "@tanstack/react-query";
import { getSimilarRecipeData } from "../../service/apiRecipies";
import { useParams } from "react-router-dom";
export function useCheckInSimilarRecipe() {
  const { id } = useParams();
  const {
    data: similarRecipe,
    error,
    isLoading: isLoadingSimilarRecipe,
  } = useQuery({
    queryKey: ["similarView", id],
    queryFn: () => getSimilarRecipeData(id),
  });

  // const combinedQueries = useQueries({
  //   queries: ids.map((id) => ({
  //     queryKey: ["post", id],
  //     queryFn: () => getRecipeData(id),
  //   })),
  //   combine: (results) => {
  //     return {
  //       data: results.map((result) => result.data),
  //       pending: results.some((result) => result.isPending),
  //     };
  //   },
  // });
  // console.log(combinedQueries);

  return { isLoadingSimilarRecipe, similarRecipe, error };
}
