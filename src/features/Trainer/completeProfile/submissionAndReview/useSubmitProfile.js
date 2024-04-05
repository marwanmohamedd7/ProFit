import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
// import { submitProfile as apiSubmitProfile } from "../../../../../services/apiCompleteProfile";
import { useCurrentUser } from "../../../../context/UserProvider";
import { submitProfile as apiSubmitProfile } from "../../../../services/apiCompleteProfile";

export function useSubmitProfile() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: submitProfile, isPending: isSubmitting } = useMutation({
    mutationFn: (submitionData) => apiSubmitProfile(submitionData, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["user"])
    },
    onError: (err) => toast.error(err.message),
  });
  return { submitProfile, isSubmitting };
}
