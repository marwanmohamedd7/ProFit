import { useQuery } from "@tanstack/react-query";
import { getUserAbout } from "../../../../services/apiTrainer";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetUserAboutData() {
  const { userToken } = useCurrentUser();
  const { data: getUserAboutData, isLoading } = useQuery({
    queryKey: ["userAboutData"], // unique cache key
    queryFn: () => getUserAbout(userToken),
    retry: 2,
  });
  return { getUserAboutData: getUserAboutData?.data, isLoading };
}
