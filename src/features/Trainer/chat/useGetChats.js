import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../context/UserProvider";
import { getTrainerChats as apiGetTrainerChats } from "../../../services/apiChat";

export function useGetChats() {
  const { userId, userToken } = useCurrentUser();
  const { data: getTrainerChats, isLoading } = useQuery({
    queryKey: ["trainerChats", userId],
    queryFn: () => apiGetTrainerChats(userToken),
    retry: false, // If the request fails, retry once more
  });
  return { getTrainerChats: getTrainerChats?.data, isLoading };
}
