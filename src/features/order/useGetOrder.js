import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrder } from "../../service/apiOrder";
export function useGetOrder() {
  const { orderId } = useParams();

  const {
    data: order,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(orderId),
  });
  return { isLoading, order, error };
}
