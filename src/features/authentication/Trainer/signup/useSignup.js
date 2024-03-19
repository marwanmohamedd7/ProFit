import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "../../../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending: isSignningUp } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      toast.success("Account created successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { signup, isSignningUp };
}
