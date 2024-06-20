import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getTrainerTranscations as apiGetTrainerTranscations } from "../../../../services/apiTrainer";

export function useGetTrainerTranscations() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const filter = searchParams.get("subscriptions")
    ? searchParams.get("subscriptions")
    : "";
  const { data: getTrainerTranscations, isLoading } = useQuery({
    queryKey: ["trainerTranscations", userId, page,filter], // unique string to identify the request
    queryFn: () => apiGetTrainerTranscations(userToken, page,filter),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getTrainerTranscations?.totalDocuments / PAGE_SIZE_DEFAULT
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["trainerTranscations", userId, page + 1,filter], // unique string to identify the request
      queryFn: () => apiGetTrainerTranscations(userToken, page + 1,filter),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["trainerTranscations", userId, page - 1,filter], // unique string to identify the request
      queryFn: () => apiGetTrainerTranscations(userToken, page - 1,filter),
      retry: false,
    });
  }

  return {
    isLoading,
    getTrainerTranscations: getTrainerTranscations?.data ?? [],
    count: getTrainerTranscations?.totalDocuments,
    allTrainerTranscations: getTrainerTranscations?.allData ?? [],
  };
}
