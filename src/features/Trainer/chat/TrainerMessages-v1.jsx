import AllChats from "./AllChats"
import Title from "../../../ui/Title"
import SearchInput from "../../../ui/SearchInput"
import ChatBox from "./ChatBox"
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useState } from "react";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import { useGetChats } from "./useGetChats";
import Spinner from "../../../ui/Spinner";

function TrainerMessages() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { getTrainerChats, isLoading } = useGetChats();
    const [activeChat, setActiveChat] = useState(null);
    if (isLoading) return <Spinner />
    return (
        <div className="grid grid-cols-[auto_1fr] h-full">
            <div className={`flex flex-col gap-4 justify-start p-4 ${isDarkMode ? colors.bg_slate_900 : colors.bg_gray_50}`}>
                <Title />
                <SearchInput placeholder="search trainee name" width="w-full" backgroundColor={colors.text_white} />
                <AllChats chats={getTrainerChats} activeChat={activeChat} setActiveChat={setActiveChat} />
            </div>
            {
                activeChat ? <ChatBox activeChat={activeChat} />
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

export default TrainerMessages


// const mockUsers = [
//     { id: 1, firstName: 'Marwan', lastName: 'Mohamed', profileImage: '/uifaces/marwan.jpg', messages: [{ content: 'eh l akhbar', sent: false, timestamp: '12:46 AM' }] },
//     { id: 2, firstName: 'Ahmed', lastName: 'Ali', profileImage: '/uifaces/ahmed.jpg', messages: [{ content: 'Hey there!', sent: false, timestamp: '12:47 AM' }] },
//     { id: 3, firstName: 'Sarah', lastName: 'Hassan', profileImage: '/uifaces/sarah.jpg', messages: [{ content: 'How are you?', sent: true, timestamp: '12:48 AM' }] },
//     { id: 4, firstName: 'John', lastName: 'Doe', profileImage: '/uifaces/john.jpg', messages: [{ content: 'Good morning!', sent: false, timestamp: '12:49 AM' }] },
//     { id: 5, firstName: 'Jane', lastName: 'Smith', profileImage: '/uifaces/jane.jpg', messages: [{ content: 'Can we meet?', sent: true, timestamp: '12:50 AM' }] },
//     { id: 6, firstName: 'Michael', lastName: 'Johnson', profileImage: '/uifaces/michael.jpg', messages: [{ content: 'See you soon!', sent: false, timestamp: '12:51 AM' }] },
//     { id: 7, firstName: 'Emily', lastName: 'Davis', profileImage: '/uifaces/emily.jpg', messages: [{ content: 'I need help.', sent: true, timestamp: '12:52 AM' }] },
//     { id: 8, firstName: 'David', lastName: 'Wilson', profileImage: '/uifaces/david.jpg', messages: [{ content: 'What time is it?', sent: false, timestamp: '12:53 AM' }] },
//     { id: 9, firstName: 'Emma', lastName: 'Brown', profileImage: '/uifaces/emma.jpg', messages: [{ content: 'I am on my way.', sent: true, timestamp: '12:54 AM' }] },
//     { id: 10, firstName: 'Liam', lastName: 'Garcia', profileImage: '/uifaces/liam.jpg', messages: [{ content: 'Let\'s catch up!', sent: false, timestamp: '12:55 AM' }] },
//     { id: 11, firstName: 'Olivia', lastName: 'Martinez', profileImage: '/uifaces/olivia.jpg', messages: [{ content: 'Call me back.', sent: true, timestamp: '12:56 AM' }] },
// ];