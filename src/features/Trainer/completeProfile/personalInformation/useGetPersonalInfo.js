import { useQuery } from "@tanstack/react-query";
import { getPersonalInfo as apiGetPersonalInfo } from "../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetPersonalInfo() {
  const { userId, userToken } = useCurrentUser();
  const { data: getPersonalInfo, isLoading: isLoadingGettingInfo } = useQuery({
    queryKey: ["personalInfo", userId],
    queryFn: () => apiGetPersonalInfo(userToken),
  });
  return { getPersonalInfo: getPersonalInfo?.trainer, isLoadingGettingInfo };
}
