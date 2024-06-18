import { useQuery } from "@tanstack/react-query";
import { getRecipeData } from "../../service/apiRecipies";
import { useParams } from "react-router-dom";
export function useCheckInRecipe() {
  const { id } = useParams();
  const {
    data: recipe,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["recipeView", id],
    queryFn: () => getRecipeData(id),
  });
  return { isLoading, recipe, error };
}
