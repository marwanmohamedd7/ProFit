import { useSearchParams } from "react-router-dom";
import { getAppMeals } from "../../../../services/apiMeals";
import { PAGE_SIZE_MEALS } from "../../../../utils/constants";
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
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(appMeals?.totalDocuments / PAGE_SIZE_MEALS);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["appMeals", userId, page + 1], // unique string to identify the request
      queryFn: () => getAppMeals(userToken, page + 1),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["appMeals", userId, page - 1], // unique string to identify the request
      queryFn: () => getAppMeals(userToken, page - 1),
      retry: false,
    });
  }

  return {
    isLoading,
    appMeals: appMeals?.data,
    count: appMeals?.totalDocuments,
  };
}
