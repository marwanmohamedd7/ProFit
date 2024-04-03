import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransformation as apiDeleteTransformation } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useDeleteTransformation() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: deleteTransformation, isPending: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteTransformation(id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["transformations"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteTransformation, isDeleting };
}
