import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getAdminDashboardData as apiGetAdminDashboardData } from "../../../../services/apiDashboard";

export function useGetAdminDashboardData() {
  const { userId, userToken } = useCurrentUser();
  const { data: getAdminDashboardData, isLoading } = useQuery({
    queryKey: ["adminDashboardData", userId],
    queryFn: () => apiGetAdminDashboardData(userToken),
    retry: false, // If the request fails, retry once more
  });
  return {
    getAdminDashboardData: getAdminDashboardData?.data,
    isLoading,
  };
}
