import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransformation as apiCreateTransformation } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useCreateTransformation() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: createTransformation, isPending: isCreating } = useMutation({
    mutationFn: (formData) => apiCreateTransformation(formData, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      // "Transformation created successfully";
      queryClient.invalidateQueries(["transformations"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { createTransformation, isCreating };
}
