import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../../../utils/constants";
import { useCurrentUser } from "../../../context/UserProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSystemUsers as apiGetSystemUsers } from "../../../services/apiAdmin";

export function useGetSystemUsers() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const filter = searchParams.get("users") ? searchParams.get("users") : "";
  const users = !searchParams.get("systemUsers")
    ? "trainers"
    : searchParams.get("systemUsers");

  const { data: getSystemUsers, isLoading } = useQuery({
    queryKey: ["systemUsers", userId, page, users,filter], // unique string to identify the request
    queryFn: () => apiGetSystemUsers(userToken, page, users,filter),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(
    getSystemUsers?.totalDocuments / PAGE_SIZE_DEFAULT
  );
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["systemUsers", userId, page + 1, users,filter], // unique string to identify the request
      queryFn: () => apiGetSystemUsers(userToken, page + 1, users,filter),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["systemUsers", userId, page - 1, users,filter], // unique string to identify the request
      queryFn: () => apiGetSystemUsers(userToken, page - 1, users,filter),
    });
  }

  return {
    isLoading,
    getSystemUsers: getSystemUsers?.data ?? [],
    count: getSystemUsers?.totalDocuments,
    allSystemUsers: getSystemUsers?.allData ?? [],
  };
}
