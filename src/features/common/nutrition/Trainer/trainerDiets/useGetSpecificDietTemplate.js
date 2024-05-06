import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { getSpecificDietTemplate } from "../../../../../services/apiDiets";

export function useGetSpecificDietTemplate() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getDietTemplate, isLoading } = useQuery({
    queryKey: ["specificDietTemplate", id], // unique string to identify the request
    queryFn: () => {
      // Ensure there is a valid id before calling the API
      if (!id) return Promise.reject(new Error("No ID provided"));
      return getSpecificDietTemplate(userToken, id);
    },
    // If the data is successfully loaded, we can display it
    enabled: !!id, // This ensures the query does not run until an id is available
    retry: 1,
  });
  return { getDietTemplate: getDietTemplate?.data ?? {}, isLoading };
}
