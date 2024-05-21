import { useParams, useSearchParams } from "react-router-dom";
import { PAGE_SIZE_MEALS } from "../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getTraineeAllCustomizePlans as apiGetTraineeAllCustomizePlans } from "../../../../services/apiSubscribedTrainees";

export function useGetTraineeAllCustomizePlans() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: getTraineeAllCustomizePlans, isLoading } = useQuery({
    queryKey: ["traineeAllCustomizePlans", userId, page], // unique string to identify the request
    queryFn: () => apiGetTraineeAllCustomizePlans(userToken, id, page),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getTraineeAllCustomizePlans?.totalDocuments / PAGE_SIZE_MEALS
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["traineeAllCustomizePlans", userId, page + 1], // unique string to identify the request
      queryFn: () => apiGetTraineeAllCustomizePlans(userToken, id, page + 1),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["traineeAllCustomizePlans", userId, page - 1], // unique string to identify the request
      queryFn: () => apiGetTraineeAllCustomizePlans(userToken, id, page - 1),
      retry: false,
    });
  }

  return {
    isLoading,
    getTraineeAllCustomizePlans: getTraineeAllCustomizePlans?.data,
    count: getTraineeAllCustomizePlans?.totalDocuments,
  };
}
