import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getAdminFinancials as apiGetAdminFinancials } from "../../../../services/apiAdmin";

export function useGetAdminFinancials() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const filter = searchParams.get("transcations")
    ? searchParams.get("transcations")
    : "";

  const { data: getAdminFinancials, isLoading } = useQuery({
    queryKey: ["adminFinancial", userId, page,filter], // unique string to identify the request
    queryFn: () => apiGetAdminFinancials(userToken, page,filter),
    retry: false,
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getAdminFinancials?.totalDocuments / PAGE_SIZE_DEFAULT
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["adminFinancial", userId, page + 1,filter], // unique string to identify the request
      queryFn: () => apiGetAdminFinancials(userToken, page + 1,filter),
      retry: false,
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["adminFinancial", userId, page - 1,filter], // unique string to identify the request
      queryFn: () => apiGetAdminFinancials(userToken, page - 1,filter),
      retry: false,
    });
  }

  return {
    isLoading,
    getAdminFinancials: getAdminFinancials?.data ?? [],
    count: getAdminFinancials?.totalDocuments,
    allAdminFinancials: getAdminFinancials?.allData ?? [],
  };
}
