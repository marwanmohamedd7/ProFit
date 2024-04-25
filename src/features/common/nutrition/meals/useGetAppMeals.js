import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getAppMeals } from "../../../../services/apiMeals";

export function useGetAppMeals() {
  const { userId, userToken } = useCurrentUser();
  const { data: appMeals, isLoading } = useQuery({
    queryKey: ["appMeals", userId], // unique string to identify the request
    queryFn: () => getAppMeals(userToken),
    retry: 2,
  });
  return { appMeals: appMeals?.data, isLoading };
}
