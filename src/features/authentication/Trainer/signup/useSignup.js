import toast from "react-hot-toast";
import { signUp } from "../../../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import checkTokenValidity from "../../../../utils/checkTokenValidity";

export function useSignup() {
  const queryClient = useQueryClient();
  const { setUserId, setUserToken, setUserRole } = useCurrentUser();
  const { mutate: signup, isPending: isSignningUp } = useMutation({
    mutationFn: signUp,
    onSuccess: ({ message, token }) => {
      setUserToken(token);
      toast.success(message);
      localStorage.setItem("userToken", token);
      const decodeToken = checkTokenValidity(token);
      setUserId(decodeToken?.payload?.id);
      setUserRole(decodeToken?.payload?.role);
      queryClient.invalidateQueries(["user"]);
    },
    onError: ({ message }) => toast.error(message),
  });
  return { signup, isSignningUp };
}
