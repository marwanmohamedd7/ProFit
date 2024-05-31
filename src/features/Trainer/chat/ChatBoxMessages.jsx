import ChatBoxMessageReceived from "./ChatBoxMessageReceived"
import ChatBoxMessageTransferred from "./ChatBoxMessageTransferred"

function ChatBoxMessages() {
    return (
        <div className={`p-4 space-y-2 overflow-y-scroll max-h-[35.05rem]`}>
            <ChatBoxMessageTransferred message="I'm glad that you are my coach" />
            <ChatBoxMessageReceived message="glad to hear that brother" />
            <ChatBoxMessageTransferred message="I'm glad that you are my coach" />
            <ChatBoxMessageTransferred message="I'm glad that you are my coach" />
            <ChatBoxMessageReceived message="glad to hear that brother" />
            <ChatBoxMessageTransferred message="I'm glad that you are my coach" />
            <ChatBoxMessageReceived message="glad to hear that brother" />
            <ChatBoxMessageTransferred message="I'm glad that you are my coach" />
            <ChatBoxMessageReceived message="glad to hear that brother" />
            <ChatBoxMessageTransferred message="I'm glad that you are my coach" />
            <ChatBoxMessageReceived message="glad to hear that brother" />
            <ChatBoxMessageTransferred message="I'm glad that you are my coach" />
            <ChatBoxMessageReceived message="glad to hear that brother" />
            <ChatBoxMessageTransferred message="I'm glad that you are my coach" />
            <ChatBoxMessageReceived message="glad to hear that brother" />
        </div>
    )
}

export default ChatBoxMessages
