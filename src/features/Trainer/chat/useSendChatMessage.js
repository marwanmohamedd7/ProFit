import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../context/UserProvider";
import { sendChatMessage as apiSendChatMessage } from "../../../services/apiChat";
import toast from "react-hot-toast";

export function useSendChatMessage() {
  const queryClient = useQueryClient();
  const { userToken } = useCurrentUser();
  const { mutate: sendChatMessage, isPending: isSending } = useMutation({
    mutationFn: ({ _id, formData }) =>
      apiSendChatMessage(_id, formData, userToken),
    onSuccess: () => {
      queryClient.invalidateQueries(["ChatMessages"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { sendChatMessage, isSending };
}
