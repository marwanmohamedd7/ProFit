import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserAbout } from "../../../../services/apiTrainer";
import { useCurrentUser } from "../../../../context/UserProvider";
import toast from "react-hot-toast";

export function useUpdateUserAboutData() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: updateUserAboutData, isPending: isUpdating } = useMutation({
    mutationFn: (userData) => updateUserAbout(userData, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["userAboutData"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUserAboutData, isUpdating };
}
