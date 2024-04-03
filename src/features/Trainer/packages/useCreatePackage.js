import toast from "react-hot-toast";
import { useCurrentUser } from "../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPackage as apiCreatePackage } from "../../../services/apiCompleteProfile";

export function useCreatePackage() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: createPackage, isPending: isCreating } = useMutation({
    mutationFn: (packageData) => apiCreatePackage(packageData, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["packages"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { createPackage, isCreating };
}
