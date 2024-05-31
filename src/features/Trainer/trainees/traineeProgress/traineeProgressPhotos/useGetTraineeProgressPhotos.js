import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { getTraineeProgressPhotos as apiGetTraineeProgressPhotos } from "../../../../../services/apiSubscribedTrainees";
import { useParams } from "react-router-dom";

export function useGetTraineeProgressPhotos() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getTraineeProgressPhotos, isLoading } = useQuery({
    queryKey: ["traineeProgressPhotos", id],
    queryFn: () => apiGetTraineeProgressPhotos(userToken, id),
    retry: false, // If the request fails, retry once more
  });
  return {
    getTraineeProgressPhotos: getTraineeProgressPhotos?.data,
    isLoading,
  };
}
