import { useQuery } from "@tanstack/react-query";
import { getPendingTrainers } from "../../../services/apiAdmin";
import { useCurrentUser } from "../../../context/UserProvider";

export function useGetPendingTrainers() {
  const { userToken } = useCurrentUser();
  const { data: pendingTrainers, isLoading } = useQuery({
    queryKey: ["pendingTrainers"], // unique string to identify the request
    queryFn: () => getPendingTrainers(userToken),
    retry: false,
  });
  return { pendingTrainers: pendingTrainers?.data, isLoading };
}
