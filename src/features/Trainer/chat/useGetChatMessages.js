import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../../context/UserProvider";
import { getChatMessages as apiGetChatMessages } from "../../../services/apiChat";

export function useGetChatMessages(chatId) {
  const { userId, userToken } = useCurrentUser();
  const { data: getChatMessages, isLoading } = useQuery({
    queryKey: ["ChatMessages", userId, chatId],
    queryFn: () => apiGetChatMessages(chatId, userToken),
    retry: false,
    enabled: !!chatId, // Ensure the query only runs if chatId is available
  });

  return { getChatMessages: getChatMessages?.data, isLoading };
}
