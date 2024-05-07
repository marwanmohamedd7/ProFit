import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pendingTrainerAcceptOrReject } from "../../../../services/apiAdmin";

export function usePendingTrainerAccept() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: acceptPendingTrainer, isPending: isAccepting } = useMutation({
    mutationFn: (id) =>
      pendingTrainerAcceptOrReject({ status: "accepted" }, id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["pendingTrainers"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return {
    acceptPendingTrainer,
    isAccepting,
  };
}
