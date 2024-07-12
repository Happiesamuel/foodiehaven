import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../../service/apiCart";

export function useAddToCart() {
  const queryClient = useQueryClient();
  const {
    mutate: addToCart,
    isLoading: isAddingToCart,
    status,
  } = useMutation({
    mutationFn: (recipe) => addToCartApi(recipe),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { addToCart, isAddingToCart, status };
}
