import toast from "react-hot-toast";
import { signUp } from "../../../../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import checkTokenValidity from "../../../../../utils/checkTokenValidity";
import { useNavigate } from "react-router";

export function useSignUp() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUserId, setUserToken, setUserRole } = useCurrentUser();
  const { mutate: signup, isPending: isSignningUp } = useMutation({
    mutationFn: signUp,
    onSuccess: ({ message, token }) => {
      setUserToken(token);
      toast.success(message);
      queryClient.invalidateQueries(["user"]);
      localStorage.setItem("userToken", token);
      const decodeToken = checkTokenValidity(token);
      setUserId(decodeToken?.payload?.id);
      setUserRole(decodeToken?.payload?.role);
      navigate("/complete-profile", { replace: true });
    },
    onError: ({ message }) => toast.error(message),
  });
  return { signup, isSignningUp };
}
