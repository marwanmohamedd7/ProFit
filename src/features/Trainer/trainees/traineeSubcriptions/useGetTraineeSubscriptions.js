import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { useCurrentUser } from "../../../../context/UserProvider";
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants";
import { getTraineeSubscriptions as apiGetTraineeSubscriptions } from "../../../../services/apiSubscribedTrainees";

export function useGetTraineeSubscriptions() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: getTraineeSubscriptions, isLoading } = useQuery({
    queryKey: ["traineeSubscriptions", userId, page], // unique string to identify the request
    queryFn: () => apiGetTraineeSubscriptions(userToken, id, page),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getTraineeSubscriptions?.totalDocuments / PAGE_SIZE_DEFAULT
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["traineeSubscriptions", userId, page + 1], // unique string to identify the request
      queryFn: () => apiGetTraineeSubscriptions(userToken, id, page + 1),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["traineeSubscriptions", userId, page - 1], // unique string to identify the request
      queryFn: () => apiGetTraineeSubscriptions(userToken, id, page - 1),
      retry: false,
    });
  }
  return {
    isLoading,
    getTraineeSubscriptions: getTraineeSubscriptions?.data,
    count: getTraineeSubscriptions?.totalDocuments,
  };
}
