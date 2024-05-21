import { useQuery } from "@tanstack/react-query";
import { getTransformations } from "../../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetTransformations() {
  const { userId, userToken } = useCurrentUser();
  const { data: transformations, isLoading } = useQuery({
    queryKey: ["transformations", userId],
    queryFn: () => getTransformations(userToken),
    retry: false,
  });
  return { transformations: transformations?.data, isLoading };
}
