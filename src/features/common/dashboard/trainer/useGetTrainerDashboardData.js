import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { getTrainerDashboardData as apiGetTrainerDashboardData } from "../../../../services/apiDashboard";

export function useGetTrainerDashboardData() {
  const { userId, userToken } = useCurrentUser();
  const { data: getTrainerDashboardData, isLoading } = useQuery({
    queryKey: ["trainerDashboardData", userId],
    queryFn: () => apiGetTrainerDashboardData(userToken),
    retry: false, // If the request fails, retry once more
  });
  return {
    getTrainerDashboardData: getTrainerDashboardData?.data,
    isLoading,
  };
}
