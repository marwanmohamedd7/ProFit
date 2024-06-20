import Chat from "./Chat";
import styles from "../../../styles/styles";
import { useDarkMode } from "../../../context/DarkModeProvider";
import Empty from "../../../ui/Empty";

function AllChats({ chats, activeChat, setActiveChat }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const activeStyle = isDarkMode ? `${colors.bg_slate_700} ${colors.text_blue_500} ${colors.border_gray_500}` : `${colors.bg_blue_50} ${colors.text_blue_700} ${colors.border_blue_700}`

    // Sort chats by the timestamp of the last message
    const sortedChats = chats?.sort((a, b) => new Date(b.lastMessage.createdAt) - new Date(a.lastMessage.createdAt));
    if (!sortedChats?.length) return <Empty resource="chats"/>
    return (
        <div className="flex flex-col justify-center gap-2">
            <h4 className={`capitalize text-sm ${isDarkMode ? colors.text_gray_200 : colors.text_gray_700} font-semibold`}>all chats</h4>
            <div className="flex flex-col justify-start gap-2 w-80 max-h-[33.25rem] overflow-y-scroll scrollbar--hide">
                {
                    sortedChats.map((chat) =>
                        <Chat
                            key={chat._id}
                            chat={chat}
                            active={activeChat?._id === chat._id ? activeStyle : ''}
                            onClick={() => setActiveChat(chat)}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default AllChats
