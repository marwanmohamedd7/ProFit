import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";

function ChatBoxMessageTransferred({ message }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className="flex justify-start items-center">
            <div className={`flex flex-col justify-between gap-1.5 w-fit max-w-[47.5%] ${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_white}` : colors.bg_gray_100} rounded-xl rounded-tl-none px-4 py-3 text-sm`}>
                <p>{message} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ab aperiam quae ut assumenda officia! Assumenda nihil rerum enim, harum molestias reprehenderit praesentium? Quia praesentium libero asperiores tempore voluptatem sequi?</p>
                <p className={`text-xs text-right ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>4:55 PM</p>
            </div>
        </div>
    )
}

export default ChatBoxMessageTransferred
