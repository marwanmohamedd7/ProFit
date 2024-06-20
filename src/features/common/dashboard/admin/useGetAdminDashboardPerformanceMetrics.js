import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getAdminDashboardPerformanceMetrics as apiGetAdminDashboardPerformanceMetrics } from "../../../../services/apiDashboard";
import { useSearchParams } from "react-router-dom";

export function useGetAdminDashboardPerformanceMetrics() {
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const filter = searchParams.get("last") ? searchParams.get("last") : "";
  const { data: getAdminDashboardPerformanceMetrics, isLoading } = useQuery({
    queryKey: ["adminDashboardPerformanceMetrics", userId, filter],
    queryFn: () => apiGetAdminDashboardPerformanceMetrics(userToken, filter),
    retry: false, // If the request fails, retry once more
  });
  return {
    getAdminDashboardPerformanceMetrics:
      getAdminDashboardPerformanceMetrics?.data,
    isLoading,
  };
}
