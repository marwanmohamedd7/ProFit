import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { useQuery } from "@tanstack/react-query";
import { getTraineeProgressMeasurements as apiGetTraineeProgressMeasurements } from "../../../../../services/apiSubscribedTrainees";

export function useGetProgressMeasurements() {
     const { id } = useParams();
     const { userToken } = useCurrentUser();
     const { data: getTraineeProgressMeasurements, isLoading } = useQuery({
       queryKey: ["traineeProgressPhotos", id],
       queryFn: () => apiGetTraineeProgressMeasurements(userToken, id),
       retry: false, // If the request fails, retry once more
     });
     return {
       getTraineeProgressMeasurements: getTraineeProgressMeasurements?.data,
       isLoading,
     };
}
