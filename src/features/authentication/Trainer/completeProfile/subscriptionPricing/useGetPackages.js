import { useQuery } from "@tanstack/react-query";
import { getPackages } from "../../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetPackages() {
  const { userToken } = useCurrentUser();
  const { data: packages, isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: () => getPackages(userToken),
  });
  return { packages: packages?.data, isLoading };
}
