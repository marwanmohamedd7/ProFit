import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { deleteDietTemplate as apiDeleteDietTemplate } from "../../../../../services/apiDiets";

export function useDeleteDietTemplate() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: deleteDietTemplate, isPending: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteDietTemplate(id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["dietTemplates"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteDietTemplate, isDeleting };
}
