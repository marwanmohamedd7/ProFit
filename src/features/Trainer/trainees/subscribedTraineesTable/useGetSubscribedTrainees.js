import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getSubscribedTrainees as apiGetSubscribedTrainees } from "../../../../services/apiSubscribedTrainees";

export function useGetSubscribedTrainees() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: getSubscribedTrainees, isLoading } = useQuery({
    queryKey: ["subscribedTrainees", userId, page], // unique string to identify the request
    queryFn: () => apiGetSubscribedTrainees(userToken, page),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getSubscribedTrainees?.totalDocuments / PAGE_SIZE_DEFAULT
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["subscribedTrainees", userId, page + 1], // unique string to identify the request
      queryFn: () => apiGetSubscribedTrainees(userToken, page + 1),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["subscribedTrainees", userId, page - 1], // unique string to identify the request
      queryFn: () => apiGetSubscribedTrainees(userToken, page - 1),
      retry: false,
    });
  }

  return {
    isLoading,
    getSubscribedTrainees: getSubscribedTrainees?.data,
    count: getSubscribedTrainees?.totalDocuments,
  };
}
