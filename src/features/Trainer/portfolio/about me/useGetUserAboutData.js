import { useQuery } from "@tanstack/react-query";
import { getUserAbout } from "../../../../services/apiTrainer";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetUserAboutData() {
  const { userId, userToken } = useCurrentUser();
  const { data: getUserAboutData, isLoading } = useQuery({
    queryKey: ["userAboutData", userId], // unique cache key
    queryFn: () => getUserAbout(userToken),
    retry: 2,
  });
  return { getUserAboutData: getUserAboutData?.data, isLoading };
}
