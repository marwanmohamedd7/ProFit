import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTransformation as apiUpdateTransformation } from "../../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useUpdateTransformation() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: updateTransformartion, isPending: isUpdating } = useMutation({
    mutationFn: ({ formData, id }) =>
      apiUpdateTransformation(formData, id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["transformations"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateTransformartion, isUpdating };
}
