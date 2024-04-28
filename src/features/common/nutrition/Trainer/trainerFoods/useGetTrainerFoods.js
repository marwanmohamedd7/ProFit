import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { getTrainerFoods } from "../../../../../services/apiFoods";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../../../utils/constants";

export function useGetTrainerFoods() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: trainerFoods, isLoading } = useQuery({
    queryKey: ["trainerFoods", userId, page], // unique string to identify the request
    queryFn: () => getTrainerFoods(userToken, page),
    retry: 2,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(trainerFoods?.count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["trainerFoods", userId, page + 1], // unique string to identify the request
      queryFn: () => getTrainerFoods(userToken, page + 1),
      retry: 2,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["trainerFoods", userId, page - 1], // unique string to identify the request
      queryFn: () => getTrainerFoods(userToken, page - 1),
      retry: 2,
    });
  }

  return {
    isLoading,
    trainerFoods: trainerFoods?.data,
    count: trainerFoods?.totalDocuments,
  };
}
