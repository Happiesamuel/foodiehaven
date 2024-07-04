import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../service/apiCart";

export function useGetCart() {
  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getCart(),
    queryKey: ["cart"],
  });
  return { cart, isLoading, error };
}
