import AllChats from "./AllChats";
import Title from "../../../ui/Title";
import SearchInput from "../../../ui/SearchInput";
import ChatBox from "./ChatBox";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import { useGetChats } from "./useGetChats";
import Spinner from "../../../ui/Spinner";
import { useChatSocket } from "../../../context/SocketProvider";
// import { useSearch } from "../../../hooks/useSearch";

// Initialize socket connection
function TrainerMessages() {
    const colors = styles();
    const { socket } = useChatSocket();
    const { isDarkMode } = useDarkMode();
    const [activeChat, setActiveChat] = useState(null);
    const { getTrainerChats, isLoading } = useGetChats();
    // const { searchedItems, setSearchKeyword } = useSearch(getTrainerChats.map(({ participant }) => participant), ["firstName", "lastName", "email"]);

    useEffect(() => {
        if (activeChat) {
            // Join the active chat room
            socket.emit('joinRoom', activeChat._id);
        }

        return () => {
            if (activeChat) {
                socket.emit('leaveRoom', activeChat._id);
            }
        };
    }, [activeChat, socket]);

    if (isLoading) return <Spinner />

    return (
        <div className="grid grid-cols-[auto_1fr] h-full">
            <div className={`flex flex-col gap-4 justify-start p-4 ${isDarkMode ? colors.bg_slate_900 : colors.bg_gray_50}`}>
                <Title />
                <SearchInput placeholder="search trainee name" width="w-full" backgroundColor={colors.text_white} />
                <AllChats chats={getTrainerChats} activeChat={activeChat} setActiveChat={setActiveChat} />
            </div>
            {
                activeChat ? <ChatBox activeChat={activeChat} socket={socket} />
                    :
                    <div className={`flex flex-col items-center justify-center gap-2 capitalize ${isDarkMode && `${colors.bg_slate_800} ${colors.text_white} border-l ${colors.border_gray_700}`}`}>
                        <h3 className="text-xl font-semibold">proFIT messages</h3>
                        <p className={`text-sm ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>select chat to start messaging</p>
                        <p className="text-4xl text-blue-700 opacity-85"><BiMessageRoundedDetail /></p>
                    </div>
            }
        </div>
    )
}

export default TrainerMessages;

// useEffect(() => {
//     if (activeChat) {
//         console.log('Joining room:', activeChat._id);
//         // Join the active chat room
//         socket.emit('joinRoom', activeChat._id);
//     }

//     // Check socket connection
//     if (socket.connected) {
//         console.log('Socket is connected');
//     } else {
//         console.log('Socket is not connected');
//     }

//     // Listen for connection and disconnection events
//     socket.on('connect', () => {
//         console.log('Socket connected');
//     });

//     socket.on('disconnect', () => {
//         console.log('Socket disconnected');
//     });

//     return () => {
//         socket.off('connect');
//         socket.off('disconnect');
//     };
// }, [activeChat, socket]);