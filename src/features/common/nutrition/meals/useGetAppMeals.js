import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../../utils/constants";
import { getAppMeals } from "../../../../services/apiMeals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetAppMeals() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: appMeals, isLoading } = useQuery({
    queryKey: ["appMeals", userId, page], // unique string to identify the request
    queryFn: () => getAppMeals(userToken, page),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(appMeals?.count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["appMeals", userId, page + 1], // unique string to identify the request
      queryFn: () => getAppMeals(userToken, page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["appMeals", userId, page - 1], // unique string to identify the request
      queryFn: () => getAppMeals(userToken, page - 1),
    });
  }

  return {
    isLoading,
    appMeals: appMeals?.data,
    count: appMeals?.totalDocuments,
  };
}
