import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../../context/UserProvider";
import { updateWaterNeedTarget as apiUpdateWaterNeedTarget } from "../../../../../../services/apiSubscribedTrainees";

function useUpdateWaterNeedTarget() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: updateWaterNeedTarget, isPending: isUpdating } = useMutation({
    mutationFn: (waterNeedData) =>
      apiUpdateWaterNeedTarget(waterNeedData, userToken, id),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["traineeProgressPerformances"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateWaterNeedTarget, isUpdating };
}

export default useUpdateWaterNeedTarget;
