import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { submitProfile as apiSubmitProfile } from "../../../../../services/apiCompleteProfile";

export function useSubmitProfile() {
  const { userToken } = useCurrentUser();
  const { mutate: submitProfile, isPending: isSubmitting } = useMutation({
    mutationFn: (submitionData) => apiSubmitProfile(submitionData, userToken),
    onSuccess: () => toast.success("Profile submitted successfully"),
    onError: (err) => toast.error(err.message),
  });
  return { submitProfile, isSubmitting };
}
