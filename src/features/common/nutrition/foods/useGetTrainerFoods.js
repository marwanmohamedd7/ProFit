import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getTrainerFoods } from "../../../../services/apiFoods";

export function useGetTrainerFoods() {
  const { userId, userToken } = useCurrentUser();
  const { data: trainerFoods, isLoading } = useQuery({
    queryKey: ["trainerFoods", userId], // unique string to identify the request
    queryFn: () => getTrainerFoods(userToken),
    retry: 2,
  });
  return { trainerFoods: trainerFoods?.data, isLoading };
}
