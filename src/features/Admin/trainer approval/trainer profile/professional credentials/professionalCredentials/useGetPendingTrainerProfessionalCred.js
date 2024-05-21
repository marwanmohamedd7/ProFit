import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../../../../../context/UserProvider";
import { useQuery } from "@tanstack/react-query";
import { getPendingTrainerProfessionalCred as apiGetPendingTrainerProfessionalCred } from "../../../../../../services/apiAdmin";

export function useGetPendingTrainerProfessionalCred() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getPendingTrainerProfessionalCred, isLoading } = useQuery({
    queryKey: ["pendingTrainerProfessionalCredentials", id], // unique string to identify the request
    queryFn: () => apiGetPendingTrainerProfessionalCred(id, userToken),
    retry: false,
  });
  return {
    getPendingTrainerProfessionalCred: getPendingTrainerProfessionalCred?.data,
    isLoading,
  };
}
