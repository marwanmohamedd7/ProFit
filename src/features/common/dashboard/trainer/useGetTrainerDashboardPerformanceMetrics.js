import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getTrainerDashboardPerformanceMetrics as apiGetTrainerDashboardPerformanceMetrics } from "../../../../services/apiDashboard";
import { useSearchParams } from "react-router-dom";

export function useGetTrainerDashboardPerformanceMetrics() {
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const filter = searchParams.get("last") ? searchParams.get("last") : "";
  const { data: getTrainerDashboardPerformanceMetrics, isLoading } = useQuery({
    queryKey: ["trainerDashboardPerformanceMetrics", userId, filter],
    queryFn: () => apiGetTrainerDashboardPerformanceMetrics(userToken, filter),
    retry: false, // If the request fails, retry once more
  });
  return {
    getTrainerDashboardPerformanceMetrics:
      getTrainerDashboardPerformanceMetrics?.data,
    isLoading,
  };
}
