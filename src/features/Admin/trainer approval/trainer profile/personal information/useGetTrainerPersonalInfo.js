import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPendingTrainerInfo as apiGetPendingTrainerInfo } from "../../../../../services/apiAdmin";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetTrainerPersonalInfo() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getPendingTrainerInfo, isLoading } = useQuery({
    queryKey: ["pendingTrainerInfo", id], // unique string to identify the request
    queryFn: () => apiGetPendingTrainerInfo(id, userToken),
    retry: 1,
  });
  return { getPendingTrainerInfo: getPendingTrainerInfo?.data, isLoading };
}
