import { useEffect } from "react";
import { useChatSocket } from "../context/SocketProvider";

export function useMessageListener(activeChatId, setMessages, setIsLoading) {
  const { socket } = useChatSocket();

  useEffect(() => {
    if (socket && activeChatId) {
      setIsLoading(true);
      socket.emit("joinRoom", activeChatId);

      // Fetch previous messages
      socket.emit("fetchMessages", { conversationId: activeChatId });

      // Listen for previous messages
      socket.on("previousMessages", (prevMessages) => {
        setMessages(prevMessages);
        setIsLoading(false);
      });

      // Listen for new messages
      socket.on("newMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      // Cleanup to avoid memory leaks
      return () => {
        socket.off("previousMessages");
        socket.off("newMessage");
      };
    }
  }, [socket, activeChatId, setMessages, setIsLoading]);
}

//   useEffect(() => {
//     if (activeChat) {
//       setIsLoading(true);

//       // Fetch previous messages
//       socket.emit("fetchMessages", { conversationId: activeChat._id });

//       // Listen for previous messages
//       socket.on("previousMessages", (prevMessages) => {
//         setMessages(prevMessages);
//         setIsLoading(false);
//       });

//       // Listen for new messages
//       socket.on("newMessage", (message) => {
//         setMessages((prev) => [...prev, message]);
//       });
//     }

//     // Cleanup to avoid memory leaks
//     return () => {
//       socket.off("previousMessages");
//       socket.off("newMessage");
//     };
//   }, [activeChat, socket]);
