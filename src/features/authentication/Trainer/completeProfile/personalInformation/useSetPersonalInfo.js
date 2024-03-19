import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setPersonalInfo as apiSetPersonalInfo } from "../../../../../services/apiCompleteProfile";
import toast from "react-hot-toast";

export function useSetPersonalInfo() {
  const queryClient = useQueryClient();
  const { mutate: setPersonalInfo, isPending: isLoadingSettingInfo } =
    useMutation({
      mutationFn: apiSetPersonalInfo,
      onSuccess: () => {
        queryClient.invalidateQueries(["personalInfo"]);
        toast.success("Data saved successfully");
      },
      onError: () => toast.error("something went wrong"),
    });
  return { setPersonalInfo, isLoadingSettingInfo };
}
