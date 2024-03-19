import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPackage as apiCreatePackage } from "../../../../../services/apiCompleteProfile";

export function useCreatePackage() {
  const queryClient = useQueryClient();
  const { mutate: createPackage, isPending: isCreating } = useMutation({
    mutationFn: apiCreatePackage,
    onSuccess: () => {
      toast.success("Package created successfully");
      queryClient.invalidateQueries(["package"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { createPackage, isCreating };
}
