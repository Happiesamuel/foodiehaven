import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../service/apiOrders";
import { useUser } from "../authentication/useUser";

export default function useGetOrders() {
  const { user } = useUser();
  const { custom } = user?.user_metadata || user.user.user_metadata;
  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(custom),
  });
  return { orders, isLoading, error };
}
