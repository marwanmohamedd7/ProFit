import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessages from "./ChatBoxMessages";

function ChatBox() {
    return (
        <div className="bg-white grid grid-rows-[auto_1fr_auto] border-l">
            <ChatBoxHeader />
            <ChatBoxMessages />
            <ChatBoxFooter />
        </div>
    )
}

export default ChatBox
