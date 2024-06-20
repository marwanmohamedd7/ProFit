import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import SpinnerMini from "../../../ui/SpinnerMini";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessages from "./ChatBoxMessages";
import { useGetChatMessages } from "./useGetChatMessages";
import { useSendChatMessage } from "./useSendChatMessage";

function ChatBox({ activeChat }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { sendChatMessage, isSending } = useSendChatMessage();
    const { getChatMessages, isLoading } = useGetChatMessages(activeChat?._id);

    const handleSendMessage = (messageContent) => {
        // Create a new FormData object
        const formData = new FormData();

        // Append the key-value pair to the FormData object
        formData.append(`content`, messageContent);

        sendChatMessage({ _id: activeChat?._id, formData });
        // Here you should also send the message to the server
    };

    if (isLoading) return <div className={`w-full h-full flex justify-center items-center ${isDarkMode && `${colors.bg_slate_900} ${colors.text_blue_700} border-l ${colors.border_gray_700}`}`}>
        <SpinnerMini size={`text-2xl ${isDarkMode ? colors.text_white : colors.text_blue_700}`} />
    </div>;
    return (
        <div className={`${isDarkMode ? `${colors.bg_slate_900} ${colors.border_gray_700}` : colors.bg_white} grid grid-rows-[auto_1fr_auto] border-l`}>
            <ChatBoxHeader chat={activeChat} />
            <ChatBoxMessages messages={getChatMessages} />
            <ChatBoxFooter onSendMessage={handleSendMessage} isLoading={isSending} />
        </div>
    );
}

export default ChatBox;