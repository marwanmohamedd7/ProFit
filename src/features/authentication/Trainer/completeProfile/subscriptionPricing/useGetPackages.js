import { useQuery } from "@tanstack/react-query";
import { getPackages } from "../../../../../services/apiCompleteProfile";

export function useGetPackages() {
  const { data: packages, isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
  });
  return { packages, isLoading };
}

