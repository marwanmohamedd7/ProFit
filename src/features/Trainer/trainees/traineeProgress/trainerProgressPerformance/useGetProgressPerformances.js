import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { useQuery } from "@tanstack/react-query";
import { getSubscribedTraineePerformances } from "../../../../../services/apiSubscribedTrainees";

function useGetProgressPerformances() {
     const { id } = useParams();
     const { userToken } = useCurrentUser();
     const { data: getTraineeProgressPerformances, isLoading } = useQuery({
       queryKey: ["traineeProgressPerformances", id], // unique string to identify the request
       queryFn: () => {
         // Ensure there is a valid id before calling the API
         if (!id) return Promise.reject(new Error("No ID provided"));
         return getSubscribedTraineePerformances(userToken, id);
       },
       // If the data is successfully loaded, we can display it
       enabled: !!id, // This ensures the query does not run until an id is available
       retry: false,
     });
     return {
       getTraineeProgressPerformances: getTraineeProgressPerformances?.data ?? {},
       isLoading,
     };
}

export default useGetProgressPerformances
