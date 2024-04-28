import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTrainerMeals } from "../../../../../services/apiMeals";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetTrainerMeals() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: trainerMeals, isLoading } = useQuery({
    queryKey: ["trainerMeals", userId, page], // unique string to identify the request
    queryFn: () => getTrainerMeals(userToken, page),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(trainerMeals?.count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["trainerMeals", userId, page + 1], // unique string to identify the request
      queryFn: () => getTrainerMeals(userToken, page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["trainerMeals", userId, page - 1], // unique string to identify the request
      queryFn: () => getTrainerMeals(userToken, page - 1),
    });
  }

  return {
    isLoading,
    trainerMeals: trainerMeals?.data,
    count: trainerMeals?.totalDocuments,
  };
}
