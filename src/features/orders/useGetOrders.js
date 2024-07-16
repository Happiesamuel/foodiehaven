import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../service/apiOrders";

export default function useGetOrders() {
  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(),
  });
  return { orders, isLoading, error };
}
