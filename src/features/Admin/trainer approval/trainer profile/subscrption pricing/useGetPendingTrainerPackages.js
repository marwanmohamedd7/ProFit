import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { useQuery } from "@tanstack/react-query";
import { getPendingTrainerPackages as apiGetPendingTrainerPackages } from "../../../../../services/apiAdmin";

export function useGetPendingTrainerPackages() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getPendingTrainerPackages, isLoading } = useQuery({
    queryKey: ["PendingTrainerPackages", id], // unique string to identify the request
    queryFn: () => apiGetPendingTrainerPackages(id, userToken),
    retry: false,
  });
  return {
    getPendingTrainerPackages: getPendingTrainerPackages?.data,
    isLoading,
  };
}
