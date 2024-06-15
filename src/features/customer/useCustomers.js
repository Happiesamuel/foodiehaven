import { useQuery } from "@tanstack/react-query";
import { getCustomersData } from "../../service/apiCustomers";

function useCustomers() {
  const {
    isLoading: isLoadingCustomer,
    data: customers,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomersData,
  });
  return { isLoadingCustomer, customers, error };
}
export default useCustomers;
