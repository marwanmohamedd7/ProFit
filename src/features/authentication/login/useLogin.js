import toast from "react-hot-toast";
import checkTokenValidity from "../../../utils/checkTokenValidity";
import { useCurrentUser } from "../../../context/UserProvider";
import { login as apiLogin } from "../../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  const queryClient = useQueryClient();
  const { setUserId, setUserToken, setUserRole } = useCurrentUser();
  const { mutate: login, isPending: isLogginIn } = useMutation({
    mutationFn: apiLogin,
    onSuccess: ({ message, token = "" }) => {
      toast.success(message);
      if (token) {
        setUserToken(token);
        localStorage.setItem("userToken", token);
        const decodeToken = checkTokenValidity(token);
        setUserId(decodeToken?.payload?.id);
        setUserRole(decodeToken?.payload?.role);
      }
      queryClient.invalidateQueries(["user"]);
    },
    onError: ({ message }) => toast.error(message),
  });
  return { login, isLogginIn };
}
