import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../../../utils/constants";
import { getAllFoods } from "../../../../../services/apiFoods";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetAllFoods() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: allFoods, isLoading } = useQuery({
    queryKey: ["allFoods", userId, page], // unique string to identify the request
    queryFn: () => getAllFoods(userToken, page),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(allFoods?.count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["allFoods", userId, page + 1], // unique string to identify the request
      queryFn: () => getAllFoods(userToken, page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["allFoods", userId, page - 1], // unique string to identify the request
      queryFn: () => getAllFoods(userToken, page - 1),
    });
  }

  return {
    isLoading,
    allFoods: allFoods?.data,
    count: allFoods?.totalDocuments,
  };
}
