import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getTrainerFoods } from "../../../../services/apiFoods";
import { useSearchParams } from "react-router-dom";

export function useGetTrainerFoods() {
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: trainerFoods, isLoading } = useQuery({
    queryKey: ["trainerFoods", userId, page], // unique string to identify the request
    queryFn: () => getTrainerFoods(userToken, page),
    retry: 2,
  });
  return { trainerFoods: trainerFoods?.data, isLoading };
}
