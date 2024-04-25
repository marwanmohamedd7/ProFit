import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getTrainerMeals } from "../../../../services/apiMeals";

export function useGetMeals() {
  const { userId, userToken } = useCurrentUser();
  const { data: trainerMeals, isLoading } = useQuery({
    queryKey: ["trainerMeals", userId], // unique string to identify the request
    queryFn: () => getTrainerMeals(userToken),
    retry: 2,
  });
  return { trainerMeals: trainerMeals?.data, isLoading };
}
