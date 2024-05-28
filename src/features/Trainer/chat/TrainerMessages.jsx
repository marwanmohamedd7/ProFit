import AllChats from "./AllChats"
import Title from "../../../ui/Title"
import SearchInput from "../../../ui/SearchInput"
import ChatBox from "./ChatBox"
import { useState } from "react";

function TrainerMessages() {
    const [activeChat, setActiveChat] = useState("");
    return (
        <div className="grid grid-cols-[auto_1fr] h-full bg-gray-50">
            <div className="flex flex-col gap-4 justify-start p-4">
                <Title />
                <SearchInput placeholder="search trainee name" width="w-full" backgroundColor="bg-white" />
                <AllChats activeChat={activeChat} setActiveChat={setActiveChat} />
            </div>
            <ChatBox />
        </div>
    )
}

export default TrainerMessages
