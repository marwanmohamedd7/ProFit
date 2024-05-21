import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getSubscribedTraineesAssessment as apiGetSubscribedTraineesAssessment } from "../../../../services/apiSubscribedTrainees";

export function useGetSubscribedTraineesAssessment() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: getSubscribedTraineesAssessment, isLoading } = useQuery({
    queryKey: ["subscribedTraineesAssessment", userId, page], // unique string to identify the request
    queryFn: () => apiGetSubscribedTraineesAssessment(userToken, page),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getSubscribedTraineesAssessment?.totalDocuments / PAGE_SIZE_DEFAULT
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["subscribedTraineesAssessment", userId, page + 1], // unique string to identify the request
      queryFn: () => apiGetSubscribedTraineesAssessment(userToken, page + 1),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["subscribedTraineesAssessment", userId, page - 1], // unique string to identify the request
      queryFn: () => apiGetSubscribedTraineesAssessment(userToken, page - 1),
      retry: false,
    });
  }

  return {
    isLoading,
    getSubscribedTraineesAssessment: getSubscribedTraineesAssessment?.data,
    count: getSubscribedTraineesAssessment?.totalDocuments,
  };
}
