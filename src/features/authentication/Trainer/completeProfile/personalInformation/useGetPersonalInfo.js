import { useQuery } from "@tanstack/react-query";
import { getPersonalInfo as apiGetPersonalInfo } from "../../../../../services/apiCompleteProfile";

export function useGetPersonalInfo() {
  const { data: getPersonalInfo, isLoading: isLoadingGettingInfo } = useQuery({
    queryKey: ["personalInfo"],
    queryFn: apiGetPersonalInfo,
  });
  return { getPersonalInfo, isLoadingGettingInfo };
}
