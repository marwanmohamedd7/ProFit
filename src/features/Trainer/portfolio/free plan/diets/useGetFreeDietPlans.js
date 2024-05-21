import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_MEALS } from "../../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { getDietFreePlans as apiGetDietFreePlans } from "../../../../../services/apiDiets";

export function useGetFreeDietPlans() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: getDietFreePlans, isLoading } = useQuery({
    queryKey: ["DietFreePlans", userId, page], // unique string to identify the request
    queryFn: () => apiGetDietFreePlans(userToken, page),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getDietFreePlans?.totalDocuments / PAGE_SIZE_MEALS
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["DietFreePlans", userId, page + 1], // unique string to identify the request
      queryFn: () => apiGetDietFreePlans(userToken, page + 1),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["DietFreePlans", userId, page - 1], // unique string to identify the request
      queryFn: () => apiGetDietFreePlans(userToken, page - 1),
      retry: false,
    });
  }
  return {
    isLoading,
    getDietFreePlans: getDietFreePlans?.data,
    count: getDietFreePlans?.totalDocuments,
  };
}
