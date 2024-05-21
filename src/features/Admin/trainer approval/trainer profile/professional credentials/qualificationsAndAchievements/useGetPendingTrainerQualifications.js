import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../../context/UserProvider";
import { getPendingTrainerQualificationsAndAchievements } from "../../../../../../services/apiAdmin";

export function useGetPendingTrainerQualifications() {
  const { id } = useParams();
  const { userToken } = useCurrentUser();
  const { data: getPendingTrainerQualifications, isLoading } = useQuery({
    queryKey: ["PendingTrainerQualificationsAndAchievements", id], // unique string to identify the request
    queryFn: () =>
      getPendingTrainerQualificationsAndAchievements(id, userToken),
    retry: false,
  });
  return {
    getPendingTrainerQualifications: getPendingTrainerQualifications?.data,
    isLoading,
  };
}
