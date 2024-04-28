import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSpecificMeals } from "../../../../services/apiMeals";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetSpecificMeal() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getMeal, isLoading } = useQuery({
    queryKey: ["specificMeal", id], // unique string to identify the request
    queryFn: () => {
      // Ensure there is a valid id before calling the API
      if (!id) return Promise.reject(new Error("No ID provided"));
      return getSpecificMeals(userToken, id);
    },
    // If the data is successfully loaded, we can display it
    enabled: !!id, // This ensures the query does not run until an id is available
    retry: 2,
  });
  return { getMeal: getMeal?.data ?? {}, isLoading };
}
