import { useSearchParams } from "react-router-dom";
import { getAppFoods } from "../../../../services/apiFoods";
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetAppFoods() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: appFoods, isLoading } = useQuery({
    queryKey: ["appFoods", userId, page], // unique string to identify the request
    queryFn: () => getAppFoods(userToken, page),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(appFoods?.totalDocuments / PAGE_SIZE_DEFAULT);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["appFoods", userId, page + 1], // unique string to identify the request
      queryFn: () => getAppFoods(userToken, page + 1),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["appFoods", userId, page - 1], // unique string to identify the request
      queryFn: () => getAppFoods(userToken, page - 1),
      retry: false,
    });
  }

  return {
    isLoading,
    appFoods: appFoods?.data,
    count: appFoods?.totalDocuments,
  };
}
