import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { doRequestAssessment } from "../../../../services/apiSubscribedTrainees";

export function useCreateRequestAssessment() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: requestAssessment, isPending: isRequesting } = useMutation({
    mutationFn: () => doRequestAssessment(userToken, id),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["specificSubscribedTrainee", id]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { requestAssessment, isRequesting };
}
