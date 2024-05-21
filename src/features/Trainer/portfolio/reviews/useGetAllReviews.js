import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getReviews as apiGetReviews } from "../../../../services/apiCompleteProfile";

export function useGetAllReviews() {
  const { userId, userToken } = useCurrentUser();
  const { data: getReviews, isLoading } = useQuery({
    queryKey: ["reviews", userId],
    queryFn: () => apiGetReviews(userToken),
    retry: false,
  });
  return { getReviews: getReviews?.data, isLoading };
}
