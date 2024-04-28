import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMeal as apiUpdateMeal } from "../../../../services/apiMeals";

export function useUpdateMeal() {
  const queryClient = useQueryClient();
  const { userRole, userToken } = useCurrentUser();
  const { mutate: updateMeal, isPending: isUpdating } = useMutation({
    mutationFn: ({ _id, mealData }) => apiUpdateMeal(_id, userToken, mealData),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries([
        userRole === "admin" ? "appMeals" : "trainerMeals",
      ]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateMeal, isUpdating };
}
