import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pendingTrainerAcceptOrReject } from "../../../../services/apiAdmin";

export function usePendingTrainerReject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: rejectPendingTrainer, isPending: isRejecting } = useMutation({
    mutationFn: () =>
      pendingTrainerAcceptOrReject({ status: "rejected" }, id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["pendingTrainers"]);
      navigate("/admin/trainer-approval", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });
  return {
    rejectPendingTrainer,
    isRejecting,
  };
}
