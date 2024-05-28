import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_MEALS } from "../../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTrainerMeals } from "../../../../../services/apiMeals";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetTrainerMeals() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const meal = !searchParams.get("meal")
    ? "allMeals"
    : searchParams.get("meal");

  const { data: trainerMeals, isLoading } = useQuery({
    queryKey: ["trainerMeals", userId, page, meal], // unique string to identify the request
    queryFn: () => getTrainerMeals(userToken, page, meal),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(trainerMeals?.totalDocuments / PAGE_SIZE_MEALS);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["trainerMeals", userId, page + 1, meal], // unique string to identify the request
      queryFn: () => getTrainerMeals(userToken, page + 1, meal),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["trainerMeals", userId, page - 1, meal], // unique string to identify the request
      queryFn: () => getTrainerMeals(userToken, page - 1, meal),
    });
  }

  return {
    isLoading,
    trainerMeals: trainerMeals?.data ?? [],
    count: trainerMeals?.totalDocuments,
  };
}
