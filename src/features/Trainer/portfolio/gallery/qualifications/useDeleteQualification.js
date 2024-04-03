import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { deleteQualification as apiDeleteQualification } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";

export function useDeleteQualification() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: deleteQualification, isPending: isLoading } = useMutation({
    mutationFn: (id) => apiDeleteQualification(id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries("qualifications");
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteQualification, isLoading };
}
