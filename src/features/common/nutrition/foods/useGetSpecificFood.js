import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSpecificFood } from "../../../../services/apiFoods";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetSpecificFood() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getFood, isLoading } = useQuery({
    queryKey: ["specificFood", id], // unique string to identify the request
    queryFn: () => {
      // Ensure there is a valid id before calling the API
      if (!id) return Promise.reject(new Error("No ID provided"));
      return getSpecificFood(id, userToken);
    },
    // If the data is successfully loaded, we can display it
    enabled: !!id, // This ensures the query does not run until an id is available
    retry: false,
  });
  return { getFood: getFood?.data ?? {}, isLoading };
}
