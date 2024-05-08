import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_MEALS } from "../../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { getDietTemplates as apiGetDietTemplates } from "../../../../../services/apiDiets";

export function useGetDietTemplates() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: getDietTemplates, isLoading } = useQuery({
    queryKey: ["dietTemplates", userId, page], // unique string to identify the request
    queryFn: () => apiGetDietTemplates(userToken, page),
    retry: 2,
    staleTime: 0,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getDietTemplates?.totalDocuments / PAGE_SIZE_MEALS
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["dietTemplates", userId, page + 1], // unique string to identify the request
      queryFn: () => apiGetDietTemplates(userToken, page + 1),
      retry: 2,
      staleTime: 0,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["dietTemplates", userId, page - 1], // unique string to identify the request
      queryFn: () => apiGetDietTemplates(userToken, page - 1),
      retry: 2,
      staleTime: 0,
    });
  }

  return {
    isLoading,
    getDietTemplates: getDietTemplates?.data,
    count: getDietTemplates?.totalDocuments,
  };
}
