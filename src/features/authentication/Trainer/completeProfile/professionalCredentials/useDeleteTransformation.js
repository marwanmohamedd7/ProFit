import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransformation as apiDeleteTransformation } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";

export function useDeleteTransformation() {
  const queryClient = useQueryClient();
  const { mutate: deleteTransformation, isPending: isDeleting } = useMutation({
    mutationFn: apiDeleteTransformation,
    onSuccess: () => {
      toast.success("Transformation deleted successfully");
      queryClient.invalidateQueries(["transformations"]);
    },
  });
  return { deleteTransformation, isDeleting };
}
