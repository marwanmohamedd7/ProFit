import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { updateTrainerFood } from "../../../../../services/apiFoods";

export function useUpdateFood() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: updateFood, isPending: isUpdating } = useMutation({
    mutationFn: ({ foodId, formData }) =>
      updateTrainerFood(foodId, userToken, formData),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["trainerFoods"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateFood, isUpdating };
}
