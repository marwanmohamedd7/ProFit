import { useQuery } from "@tanstack/react-query";
import { getAppFoods } from "../../../../services/apiFoods";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useSearchParams } from "react-router-dom";

export function useGetAppFoods() {
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: appFoods, isLoading } = useQuery({
    queryKey: ["appFoods", userId, page], // unique string to identify the request
    queryFn: () => getAppFoods(userToken, page),
    retry: 2,
  });
  return { appFoods: appFoods?.data, isLoading };
}
