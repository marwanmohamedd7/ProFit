import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMeal as apiCreateMeal } from "../../../../services/apiMeals";

export function useCreateMeal() {
  const queryClient = useQueryClient();
  const { userRole, userToken } = useCurrentUser();
  const { mutate: createMeal, isPending: isCreating } = useMutation({
    mutationFn: (mealData) => apiCreateMeal(userToken, mealData),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries([
        userRole === "admin" ? "appMeals" : "trainerMeals",
      ]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { createMeal, isCreating };
}
