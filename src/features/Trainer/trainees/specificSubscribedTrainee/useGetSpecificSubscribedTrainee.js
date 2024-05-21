import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getSpecificSubscribedTrainee as apiGetSpecificSubscribedTrainee } from "../../../../services/apiSubscribedTrainees";

export function useGetSpecificSubscribedTrainee() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getSpecificSubscribedTrainee, isLoading } = useQuery({
    queryKey: ["specificSubscribedTrainee", id], // unique string to identify the request
    queryFn: () => {
      // Ensure there is a valid id before calling the API
      if (!id) return Promise.reject(new Error("No ID provided"));
      return apiGetSpecificSubscribedTrainee(userToken, id);
    },
    // If the data is successfully loaded, we can display it
    enabled: !!id, // This ensures the query does not run until an id is available
    retry: false,
  });
  return {
    getSpecificSubscribedTrainee: getSpecificSubscribedTrainee?.data ?? {},
    isLoading,
  };
}
