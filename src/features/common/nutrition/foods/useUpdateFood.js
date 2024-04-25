import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFood as apiUpdateFood } from "../../../../services/apiFoods";

export function useUpdateFood() {
  const queryClient = useQueryClient();
  const { userRole, userToken } = useCurrentUser();
  const { mutate: updateFood, isPending: isUpdating } = useMutation({
    mutationFn: ({ foodId, formData }) =>
      apiUpdateFood(foodId, userToken, formData),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries([
        userRole === "admin" ? "appFoods" : "trainerFoods",
      ]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateFood, isUpdating };
}
