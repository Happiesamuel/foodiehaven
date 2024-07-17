import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrder as addOrderApi } from "../../service/apiOrder";

export function useAddOrder() {
  const queryClient = useQueryClient();
  const { mutate: addOrder, isLoading: isAddingOrder } = useMutation({
    mutationFn: (order) => addOrderApi(order),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
  return { addOrder, isAddingOrder };
}
