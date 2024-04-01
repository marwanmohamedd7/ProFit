import { useQuery } from "@tanstack/react-query";
import { getPersonalInfo as apiGetPersonalInfo } from "../../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetPersonalInfo() {
  const { userToken } = useCurrentUser();
  const { data: getPersonalInfo, isLoading: isLoadingGettingInfo } = useQuery({
    queryKey: ["personalInfo"],
    queryFn: () => apiGetPersonalInfo(userToken),
  });
  return { getPersonalInfo: getPersonalInfo?.trainer, isLoadingGettingInfo };
}
