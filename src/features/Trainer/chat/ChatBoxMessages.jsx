import { useEffect, useRef } from "react";
import { useDarkMode } from "../../../context/DarkModeProvider";
import { useCurrentUser } from "../../../context/UserProvider";
import styles from "../../../styles/styles";
import ChatBoxMessageReceived from "./ChatBoxMessageReceived";
import ChatBoxMessageSent from "./ChatBoxMessageSent";

function ChatBoxMessages({ messages }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { userId } = useCurrentUser();
    const messagesEndRef = useRef(null); // Reference to the end of the messages list

    // Scroll to the bottom of the chat when messages change
    const scrollToBottom = (behavior = "smooth") => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior }); // Scroll to the bottom
        }
    };

    useEffect(() => {
        scrollToBottom("auto"); // Scroll instantly when the component mounts or messages change
    }, []);

    useEffect(() => {
        scrollToBottom(); // Smooth scroll to bottom when messages update
    }, [messages]);

    return (
        <div className={`p-4 space-y-2 overflow-y-scroll scrollbar--custom ${isDarkMode ? `${colors.bg_slate_800} bg-opacity-10` : `${colors.bg_gray_50}`}`}>
            {messages.map((message, index) => {
                const key = message?._id ? `${message._id}-${index}` : `${message?.conversationId}-${index}`;
                return message.sender._id === userId
                    ? <ChatBoxMessageSent key={key} message={message} />
                    : <ChatBoxMessageReceived key={key} message={message} />;
            })}
            <div ref={messagesEndRef} /> {/* This is the reference to scroll to */}
        </div>
    );
}

export default ChatBoxMessages;
