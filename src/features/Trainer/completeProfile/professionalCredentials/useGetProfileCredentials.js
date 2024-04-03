import { useQuery } from "@tanstack/react-query";
import { getProfileCredentials } from "../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useGetProfileCredentials() {
  const { userId, userToken } = useCurrentUser();
  const { data: getProfessionalCred, isLoading } = useQuery({
    queryKey: [`credentials`, userId],
    queryFn: () => getProfileCredentials(userToken),
  });
  return { getProfessionalCred: getProfessionalCred?.trainer, isLoading };
}
