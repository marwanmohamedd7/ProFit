import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTraineeCustomizePlan as apiCreateTraineeCustomizePlan } from "../../../../services/apiSubscribedTrainees";

export function useCreateCustomizedPlan() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: createTraineeCustomizePlan, isPending: isCreating } =
    useMutation({
      mutationFn: ({ dietData, _id }) =>
        apiCreateTraineeCustomizePlan(userToken, dietData, _id),
      onSuccess: ({ message }) => {
        toast.success(message);
        queryClient.invalidateQueries([`traineeAllCustomizePlans`]);
      },
      onError: (err) => toast.error(err.message),
    });
  return { createTraineeCustomizePlan, isCreating };
}
