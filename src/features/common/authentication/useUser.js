import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";
import { useCurrentUser } from "../../../context/UserProvider";

export function useUser() {
  const { userRole, userToken, userId } = useCurrentUser();
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId], // unique cache key
    queryFn: () => getCurrentUser(userToken, userRole),
    retry: 1, // Retry on failures?
    // retry: false, // Retry on failures?
  });
  return {
    isLoading,
    user: user?.data,
    status: user?.data?.status,
    isAuthenticated: user?.data?.role,
  };
}
