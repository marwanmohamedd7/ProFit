import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { createDietTemplate as apiCreateDietTemplate } from "../../../../../services/apiDiets";

export function useCreateDietTemplate() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: createDietTemplate, isPending: isCreating } = useMutation({
    mutationFn: (dietData) => apiCreateDietTemplate(userToken, dietData),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries([`dietTemplates`]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { createDietTemplate, isCreating };
}
