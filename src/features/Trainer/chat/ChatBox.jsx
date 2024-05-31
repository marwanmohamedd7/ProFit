import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessages from "./ChatBoxMessages";

function ChatBox() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();

    return (
        <div className={`${isDarkMode ? `${colors.bg_slate_900} ${colors.border_gray_700}` : colors.bg_white} grid grid-rows-[auto_1fr_auto] border-l`}>
            <ChatBoxHeader />
            <ChatBoxMessages />
            <ChatBoxFooter />
        </div>
    )
}

export default ChatBox
