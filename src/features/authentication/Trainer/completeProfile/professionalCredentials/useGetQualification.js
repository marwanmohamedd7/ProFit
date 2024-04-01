import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { getQualifications as apiGetQualifications } from "../../../../../services/apiCompleteProfile";

export function useGetQualification() {
  const { userToken } = useCurrentUser();
  const { data: getQualifications, isLoading } = useQuery({
    queryKey: ["qualifications"],
    queryFn: () => apiGetQualifications(userToken),
    retry: 2, // If the request fails, retry once more
  });
  return { getQualifications: getQualifications?.data, isLoading };
}
