import toast from "react-hot-toast";
import { useCurrentUser } from "../../../context/UserProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePackage as apiUpdatePackage } from "../../../services/apiCompleteProfile";

export function useUpdatePackage() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: updatePackage, isPending: isUpdating } = useMutation({
    mutationFn: ({ updatedPackageData, id }) =>
      apiUpdatePackage(updatedPackageData, id, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["packages"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updatePackage, isUpdating };
}
