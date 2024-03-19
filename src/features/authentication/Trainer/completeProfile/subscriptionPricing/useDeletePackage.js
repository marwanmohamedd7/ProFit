import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePackage as apiDeletePackage } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";

export function useDeletePackage() {
  const queryClient = useQueryClient();
  const { mutate: deletePackage, isPending: isDeleting } = useMutation({
    mutationFn: apiDeletePackage,
    onSuccess: () => {
      toast.success("Package deleted successfully");
      queryClient.invalidateQueries(["package"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { deletePackage, isDeleting };
}
