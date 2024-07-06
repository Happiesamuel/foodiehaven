import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart as updateCartApi } from "../../service/apiCart";
import toast from "react-hot-toast";

export function useUpdateCart() {
  const queryClient = useQueryClient();
  const {
    mutate: updateCart,
    isLoading,
    status,
  } = useMutation({
    mutationFn: ({ id, obj }) => updateCartApi(id, obj),
    onSuccess: () => {
      // queryClient.invalidateQueries({ active: true });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  // console.log(status);
  return { updateCart, isLoading, status };
}
