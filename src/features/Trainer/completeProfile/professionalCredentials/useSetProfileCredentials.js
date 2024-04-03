import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setProfileCredentials } from "../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useSetProfileCredentials() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: setProfessionalCred, isPending: isLoading } = useMutation({
    mutationFn: (credData) => setProfileCredentials(credData, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["credentials"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { setProfessionalCred, isLoading };
}
