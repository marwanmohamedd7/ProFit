import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFood as apiCreateFood } from "../../../../services/apiFoods";

export function useCreateFood() {
  const queryClient = useQueryClient();
  const { userRole, userToken } = useCurrentUser();
  const { mutate: createFood, isPending: isCreating } = useMutation({
    mutationFn: (foodData) => apiCreateFood(userToken, foodData),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries([
        userRole === "admin" ? "appFoods" : "trainerFoods",
      ]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { createFood, isCreating };
}
