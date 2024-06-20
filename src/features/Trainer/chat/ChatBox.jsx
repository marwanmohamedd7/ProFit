import { useState } from "react";
import styles from "../../../styles/styles";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessages from "./ChatBoxMessages";
import { useDarkMode } from "../../../context/DarkModeProvider";
import { useCurrentUser } from "../../../context/UserProvider";
import SpinnerMini from "../../../ui/SpinnerMini";
import { useMessageListener } from "../../../hooks/useMessageListener";

function ChatBox({ activeChat, socket }) {
    const colors = styles();
    const { userId } = useCurrentUser();
    const { isDarkMode } = useDarkMode();
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useMessageListener(activeChat?._id, setMessages, setIsLoading);

    const handleSendMessage = async (messageContent, imageFile) => {
        let images = [];
        if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
                images.push(base64String); // Convert image to base64 string

                const message = {
                    conversationId: activeChat._id,
                    content: messageContent,
                    sender: { _id: userId }, // Correctly set the sender ID
                    images: images,
                    createdAt: new Date(),
                };

                // Emit the sendMessage event with the message object
                socket.emit('message', message);

                // Optimistically update the messages state
                setMessages((prev) => [...prev, message]);
            };
            reader.readAsDataURL(imageFile); // Read the image file as base64
        } else {
            const message = {
                conversationId: activeChat._id,
                content: messageContent,
                sender: { _id: userId }, // Correctly set the sender ID
                images: images,
                createdAt: new Date(),
            };

            // Emit the sendMessage event with the message object
            socket.emit('message', message);

            // Optimistically update the messages state
            setMessages((prev) => [...prev, message]);
        }
    };

    if (!activeChat) return null;

    return (
        <div className={`${isDarkMode ? colors.bg_slate_900 : colors.bg_white} grid grid-rows-[auto_1fr_auto] border-l ${isDarkMode ? colors.border_gray_700 : ''}`}>
            <ChatBoxHeader chat={activeChat} />
            {isLoading ? (
                <div className={`flex justify-center items-center h-full ${isDarkMode && colors.text_white}`}>
                    <SpinnerMini />
                </div>
            ) : (
                <ChatBoxMessages messages={messages} />
            )}
            <ChatBoxFooter onSendMessage={handleSendMessage} />
        </div>
    );
}

export default ChatBox;
