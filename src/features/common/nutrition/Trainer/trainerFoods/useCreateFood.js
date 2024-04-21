import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { createTrainerFood } from "../../../../../services/apiFoods";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateFood() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: createFood, isPending: isCreating } = useMutation({
    mutationFn: (foodData) => createTrainerFood(userToken, foodData),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["trainerFoods"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { createFood, isCreating };
}
