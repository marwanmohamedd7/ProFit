import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import Chat from "./Chat"
function AllChats() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const active = isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_500}` : `${colors.bg_blue_50} ${colors.border_blue_700}`
    return (
        <div className="flex flex-col justify-center gap-2">
            <h4 className={`capitalize text-sm ${isDarkMode ? colors.text_gray_200 : colors.text_blue_700} font-semibold`}>all chats</h4>
            <div className="flex flex-col justify-start gap-2 w-80 max-h-[33.25rem] overflow-y-scroll">
                {[1, 2, 8, 1, 1, 1, 8, 9, 7].map((_, index) => <Chat key={index} active={index < 1 ? active : ''} />)}
            </div>
        </div>
    )
}

export default AllChats
