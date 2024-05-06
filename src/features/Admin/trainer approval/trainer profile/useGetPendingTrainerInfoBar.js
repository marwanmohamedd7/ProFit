import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getPendingTrainerInfoBar as apiGetPendingTrainerInfoBar } from "../../../../services/apiAdmin";

export function useGetPendingTrainerInfoBar() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getPendingTrainerInfoBar, isLoading } = useQuery({
    queryKey: ["PendingTrainerInfoBar", id], // unique string to identify the request
    queryFn: () => apiGetPendingTrainerInfoBar(id, userToken),
    retry: 1,
  });
  return {
    getPendingTrainerInfoBar: getPendingTrainerInfoBar?.data,
    isLoading,
  };
}
