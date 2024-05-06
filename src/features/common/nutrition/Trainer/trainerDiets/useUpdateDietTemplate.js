import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { updateDietTemplate as apiUpdateDietTemplate } from "../../../../../services/apiDiets";

export function useUpdateDietTemplate() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: updateDietTemplate, isPending: isUpdating } = useMutation({
    mutationFn: ({ _id, dietData }) =>
      apiUpdateDietTemplate(_id, userToken, dietData),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries([`dietTemplates`]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateDietTemplate, isUpdating };
}
