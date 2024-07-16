import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrders as deleteOrdersApi } from "../../service/apiOrders";
import toast from "react-hot-toast";

export function useDeleteOrders() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteOrders,
    isLoading: isDeleting,
    status,
  } = useMutation({
    mutationFn: (id) => deleteOrdersApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("item deleted");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteOrders, isDeleting, status };
}
