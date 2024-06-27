import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../../context/UserProvider";
import toast from "react-hot-toast";
import { updateStepsGoal as apiUpdateStepsGoal } from "../../../../../../services/apiSubscribedTrainees";
import { useParams } from "react-router-dom";

function useUpdateStepsGoal() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: updateStepsGoal, isPending: isUpdating } = useMutation({
    mutationFn: (stepsData) => apiUpdateStepsGoal(stepsData, userToken, id),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["traineeProgressPerformances"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateStepsGoal, isUpdating };
}

export default useUpdateStepsGoal;
