import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../../context/UserProvider";
import { useParams } from "react-router-dom";
import { getPendingTrainerClientsTransformation as apiGetPendingTrainerClientsTransformation } from "../../../../../../services/apiAdmin";

export function useGetPendingTrainerClientsTransformation() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getPendingTrainerClientsTransformation, isLoading } = useQuery({
    queryKey: ["pendingTrainerClientsTransformation", id], // unique string to identify the request
    queryFn: () => apiGetPendingTrainerClientsTransformation(id, userToken),
    retry: false,
  });
  return {
    getPendingTrainerClientsTransformation:
      getPendingTrainerClientsTransformation?.data,
    isLoading,
  };
}
