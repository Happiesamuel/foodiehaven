import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCart as deleteCartApi } from "../../service/apiCart";
import toast from "react-hot-toast";

export function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate: deleteCart, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteCartApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteCart, isDeleting };
}
