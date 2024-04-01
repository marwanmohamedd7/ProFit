import { useQuery } from "@tanstack/react-query";
import { getTransformations } from "../../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetTransformations() {
  const { userToken } = useCurrentUser();
  const { data: transformations, isLoading } = useQuery({
    queryKey: ["transformations"],
    queryFn: () => getTransformations(userToken),
  });
  return { transformations: transformations?.data, isLoading };
}
