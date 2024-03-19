import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePackage as apiUpdatePackage } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";

export function useUpdatePackage() {
  const queryClient = useQueryClient();
  const { mutate: updatePackage, isPending: isUpdating } = useMutation({
    mutationFn: ({ updatedPackageData, id }) =>
      apiUpdatePackage(updatedPackageData, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["package"]);
      toast.success("Package updated successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { updatePackage, isUpdating };
}
