import { useQuery } from "@tanstack/react-query";
import { getTransformations } from "../../../../../services/apiCompleteProfile";

export function useGetTransformations() {
  const { data: transformations, isLoading } = useQuery({
    queryKey: ["transformations"],
    queryFn: getTransformations,
  });
  return { transformations, isLoading };
}
