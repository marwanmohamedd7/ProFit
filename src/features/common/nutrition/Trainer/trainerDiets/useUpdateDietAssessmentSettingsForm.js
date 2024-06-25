import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { updateDietAssessmentSettingsForm as apiUpdateDietAssessmentSettingsForm } from "../../../../../services/apiSubscribedTrainees";

export function useUpdateDietAssessmentSettingsForm() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: updateDietAssessmentSettingsForm, isPending: isUpdating } =
    useMutation({
      mutationFn: (dietData) =>
        apiUpdateDietAssessmentSettingsForm(dietData, userToken, id),
      onSuccess: ({ message }) => {
        toast.success(message);
        queryClient.invalidateQueries([`dietAssessmentSettingsForm`]);
      },
      onError: (err) => toast.error(err.message),
    });
  return { updateDietAssessmentSettingsForm, isUpdating };
}
