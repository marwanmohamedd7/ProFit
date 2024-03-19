import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransformation as apiCreateTransformation } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";

export function useCreateTransformation() {
  const queryClient = useQueryClient();
  const { mutate: createTransformation, isPending: isCreating } = useMutation({
    mutationFn: apiCreateTransformation,
    onSuccess: () => {
      toast.success("Transformation created successfully");
      queryClient.invalidateQueries(["transformations"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { createTransformation, isCreating };
}
