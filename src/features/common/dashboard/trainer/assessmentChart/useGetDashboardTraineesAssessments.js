import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { getDashboardTraineesAssessments as apiGetDashboardTraineesAssessments } from "../../../../../services/apiDashboard";

export function useGetDashboardTraineesAssessments() {
  const { userId, userToken } = useCurrentUser();
  const { data: getDashboardTraineesAssessments, isLoading } = useQuery({
    queryKey: ["dashboardTraineesAssessments", userId],
    queryFn: () => apiGetDashboardTraineesAssessments(userToken),
    retry: false, // If the request fails, retry once more
  });
  return {
    getDashboardTraineesAssessments: getDashboardTraineesAssessments?.data,
    isLoading,
  };
}
