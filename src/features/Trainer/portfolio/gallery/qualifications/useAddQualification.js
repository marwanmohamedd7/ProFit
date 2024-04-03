import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";
import { addQualification as apiAddQualification } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";

export function useAddQualification() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: addQualification, isPending: isLoading } = useMutation({
    mutationFn: (formData) => apiAddQualification(formData, userToken),
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries("qualifications");
    },
    onError: (err) => toast.error(err.message),
  });
  return { addQualification, isLoading };
}
