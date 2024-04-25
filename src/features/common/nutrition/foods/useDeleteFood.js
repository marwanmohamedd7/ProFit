import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import { deleteTrainerFood } from "../../../../services/apiFoods";
import toast from "react-hot-toast";

export function useDeleteFood() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: deleteFood, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteTrainerFood(id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["trainerFoods"]);
    },
    onError: (err) => toast.success(err.message),
  });
  return { deleteFood, isDeleting };
}
