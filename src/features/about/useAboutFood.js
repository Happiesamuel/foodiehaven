import { useQuery } from "@tanstack/react-query";
import { getFoodRecipies } from "../../service/apiAbout";

function useAboutFood() {
  const {
    data: aboutData,
    isLoading: isLoadingAbout,
    error,
  } = useQuery({
    queryKey: ["about"],
    queryFn: getFoodRecipies,
  });

  return { isLoadingAbout, aboutData, error };
}
export default useAboutFood;
