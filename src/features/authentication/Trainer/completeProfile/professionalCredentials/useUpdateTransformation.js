import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateTransformation as apiUpdateTransformation } from "../../../../../services/apiCompleteProfile";

export function useUpdateTransformation() {
  const queryClient = useQueryClient();
  const { mutate: updateTransformartion, isPending: isUpdating } = useMutation({
    mutationFn: ({ transformationData, id }) =>
      apiUpdateTransformation(transformationData, id),
    onSuccess: () => {
      toast.success("Transformation updated successfully");
      queryClient.invalidateQueries(["transformations"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateTransformartion, isUpdating };
}
