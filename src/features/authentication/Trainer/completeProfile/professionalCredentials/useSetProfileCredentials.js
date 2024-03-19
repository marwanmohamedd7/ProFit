import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setProfileCredentials } from "../../../../../services/apiCompleteProfile";

export function useSetProfileCredentials() {
  const queryClient = useQueryClient();
  const { mutate: setProfessionalCred, isPending: isLoading } = useMutation({
    mutationFn: setProfileCredentials,
    onSuccess: () => {
      // toast.success("Data saved successfully");
      queryClient.invalidateQueries(["credentials"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { setProfessionalCred, isLoading };
}
