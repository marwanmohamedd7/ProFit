import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMeal as apiDeleteMeal } from "../../../../services/apiMeals";

export function useDeleteMeal() {
  const queryClient = useQueryClient();
  const { userRole, userToken } = useCurrentUser();
  const { mutate: deleteMeal, isPending: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteMeal(id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries([
        userRole === "admin" ? "appMeals" : "trainerMeals",
      ]);
    },
    onError: (err) => toast.success(err.message),
  });
  return { deleteMeal, isDeleting };
}
