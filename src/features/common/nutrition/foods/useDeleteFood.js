import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFood as apiDeleteFood } from "../../../../services/apiFoods";

export function useDeleteFood() {
  const queryClient = useQueryClient();
  const { userRole, userToken } = useCurrentUser();
  const { mutate: deleteFood, isPending: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteFood(id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries([
        userRole === "admin" ? "appFoods" : "trainerFoods",
      ]);
    },
    onError: (err) => toast.success(err.message),
  });
  return { deleteFood, isDeleting };
}
