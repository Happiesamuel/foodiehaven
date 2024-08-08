import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../service/apiCart";
import { useUser } from "../authentication/useUser";

export function useGetCart() {
  const { user } = useUser();
  const { custom } = user?.user_metadata || user.user.user_metadata;
  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getCart(custom),
    queryKey: ["cart"],
  });
  return { cart, isLoading, error };
}
