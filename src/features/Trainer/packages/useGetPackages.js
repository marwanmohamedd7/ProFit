import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../../../utils/constants";
import { useCurrentUser } from "../../../context/UserProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPackages } from "../../../services/apiCompleteProfile";

export function useGetPackages() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: packages, isLoading } = useQuery({
    queryKey: ["packages", userId, page],
    queryFn: () => getPackages(userToken, page),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(packages?.totalDocuments / PAGE_SIZE_DEFAULT);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["packages", userId, page + 1], // unique string to identify the request
      queryFn: () => getPackages(userToken, page + 1),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["packages", userId, page - 1], // unique string to identify the request
      queryFn: () => getPackages(userToken, page - 1),
      retry: false,
    });
  }

  return {
    isLoading,
    packages: packages?.data ?? [],
    count: packages?.totalDocuments,
    allPackages: packages?.allData ?? [],
  };
}
