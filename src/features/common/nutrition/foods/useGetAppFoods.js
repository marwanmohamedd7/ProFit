import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAppFoods } from "../../../../services/apiFoods";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../../utils/constants";

export function useGetAppFoods() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: appFoods, isLoading } = useQuery({
    queryKey: ["appFoods", userId, page], // unique string to identify the request
    queryFn: () => getAppFoods(userToken, page),
    retry: 2,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(appFoods?.count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["appFoods", userId, page + 1], // unique string to identify the request
      queryFn: () => getAppFoods(userToken, page + 1),
      retry: 2,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["appFoods", userId, page - 1], // unique string to identify the request
      queryFn: () => getAppFoods(userToken, page - 1),
      retry: 2,
    });
  }

  return {
    isLoading,
    appFoods: appFoods?.data,
    count: appFoods?.totalDocuments,
  };
}
