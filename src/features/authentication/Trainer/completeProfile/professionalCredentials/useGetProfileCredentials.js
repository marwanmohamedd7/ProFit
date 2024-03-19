import { useQuery } from "@tanstack/react-query";
import { getProfileCredentials } from "../../../../../services/apiCompleteProfile";

export function useGetProfileCredentials() {
  const { data: getProfessionalCred, isLoading } = useQuery({
    queryKey: [`credentials`],
    queryFn: getProfileCredentials,
  });
  return { getProfessionalCred, isLoading };
}
