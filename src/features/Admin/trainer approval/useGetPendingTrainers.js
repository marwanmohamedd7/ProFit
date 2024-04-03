import { useQuery } from "@tanstack/react-query";
import { getPendingTrainers } from "../../../services/apiAdmin";
import { useCurrentUser } from "../../../context/UserProvider";

function useGetPendingTrainers() {
  const { userToken } = useCurrentUser();
  const { data: pendingTrainers, isLoading } = useQuery({
    queryKey: ["pending_trainers"], // unique string to identify the request
    queryFn: () => getPendingTrainers(userToken),
  });
  return { pendingTrainers: pendingTrainers?.data, isLoading };
}

export default useGetPendingTrainers;
