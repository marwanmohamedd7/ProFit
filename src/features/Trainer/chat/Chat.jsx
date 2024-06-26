import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import { formatTime } from "../../../utils/helpers";

function Chat({ chat, active, onClick }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { lastMessage: { content, createdAt }, participant: { firstName, lastName, profilePhoto } } = chat;
    return (
        <button onClick={onClick} className={`flex justify-between gap-2 p-3 border cursor-pointer rounded-md ${active ? active : `${isDarkMode ? `${colors.bg_slate_900} ${colors.text_white} ${colors.border_gray_700}` : `${colors.bg_white} ${colors.text_gray_700} ${colors.border_gray_200}`}`}`}>
            <div className="flex items-center gap-3 whitespace-nowrap">
                <div className="h-12 w-12">
                    <img className="h-12 w-12 rounded-full" src={profilePhoto} alt={`${firstName} ${lastName}`} />
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                    <p className={`flex items-center gap-1 capitalize text-sm font-bold`}>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </p>
                    <p className={`text-xs ${isDarkMode ? colors.text_gray_100 : colors.text_gray_500} overflow-hidden text-ellipsis whitespace-nowrap`} style={{ maxWidth: '10rem' }}>
                        {content}
                    </p>
                </div>
            </div>
            <p className={`py-2 text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500} whitespace-nowrap`}>{createdAt ? formatTime(createdAt) : ''}</p>
        </button>
    )
}

export default Chat;
