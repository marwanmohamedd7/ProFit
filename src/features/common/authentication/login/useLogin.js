import toast from "react-hot-toast";
import checkTokenValidity from "../../../../utils/checkTokenValidity";
import { useCurrentUser } from "../../../../context/UserProvider";
import { login as apiLogin } from "../../../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUserId, setUserToken, setUserRole } = useCurrentUser();
  const { mutate: login, isPending: isLogginIn } = useMutation({
    mutationFn: apiLogin,
    onSuccess: ({ message, user: { role, status = "" }, token = "" }) => {
      toast.success(message);
      queryClient.invalidateQueries(["user"]);
      if (token) {
        setUserToken(token);
        localStorage.setItem("userToken", token);
        const decodeToken = checkTokenValidity(token);
        setUserId(decodeToken?.payload?.id);
        setUserRole(decodeToken?.payload?.role);
        navigate("/trainer", { replace: true });
      }
      if (token && role === "admin") navigate("/admin", { replace: true });
      if (token && role !== "admin" && status === "accepted")
        navigate("/trainer", { replace: true });
      if (!token && role !== "admin" && status === "incomplete")
        navigate("/complete-profile", { replace: true });
    },
    onError: ({ message }) => toast.error(message),
  });
  return { login, isLogginIn };
}
