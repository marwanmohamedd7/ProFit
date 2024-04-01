import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePackage as apiDeletePackage } from "../../../../../services/apiCompleteProfile";

export function useDeletePackage() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: deletePackage, isPending: isDeleting } = useMutation({
    mutationFn: (id) => apiDeletePackage(id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["packages"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { deletePackage, isDeleting };
}
