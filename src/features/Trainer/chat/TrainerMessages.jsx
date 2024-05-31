import AllChats from "./AllChats"
import Title from "../../../ui/Title"
import SearchInput from "../../../ui/SearchInput"
import ChatBox from "./ChatBox"
import { useState } from "react";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";

function TrainerMessages() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [activeChat, setActiveChat] = useState("");
    return (
        <div className="grid grid-cols-[auto_1fr] h-full">
            <div className={`flex flex-col gap-4 justify-start p-4 ${isDarkMode ? colors.bg_slate_900 : colors.bg_gray_50}`}>
                <Title />
                <SearchInput placeholder="search trainee name" width="w-full" backgroundColor={colors.text_white} />
                <AllChats activeChat={activeChat} setActiveChat={setActiveChat} />
            </div>
            <ChatBox />
        </div>
    )
}

export default TrainerMessages
