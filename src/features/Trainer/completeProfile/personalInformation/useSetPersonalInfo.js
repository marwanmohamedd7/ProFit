import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setPersonalInfo as apiSetPersonalInfo } from "../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../../../context/UserProvider";

export function useSetPersonalInfo() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: setPersonalInfo, isPending: isLoadingSettingInfo } =
    useMutation({
      mutationFn: (formData) => apiSetPersonalInfo(formData, userToken),
      onSuccess: () => queryClient.invalidateQueries(["personalInfo"]),
      onError: () => toast.error("something went wrong"),
    });
  return { setPersonalInfo, isLoadingSettingInfo };
}
