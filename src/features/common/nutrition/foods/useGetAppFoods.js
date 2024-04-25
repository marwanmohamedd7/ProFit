import { useQuery } from "@tanstack/react-query";
import { getAppFoods } from "../../../../services/apiFoods";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetAppFoods() {
  const { userId, userToken } = useCurrentUser();
  const { data: appFoods, isLoading } = useQuery({
    queryKey: ["appFoods", userId], // unique string to identify the request
    queryFn: () => getAppFoods(userToken),
    retry: 2,
  });
  return { appFoods: appFoods?.data, isLoading };
}
