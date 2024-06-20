import styles from "../../../styles/styles";
import ImageViewer from "../../../ui/ImageViewer";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useDarkMode } from "../../../context/DarkModeProvider";

function ChatBoxHeader({ chat }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { participant: { firstName, lastName, profilePhoto } } = chat;
    return (
        <div className={`flex justify-between items-center gap-2 p-2 cursor-pointer border-b ${isDarkMode ? `${colors.bg_slate_900} ${colors.border_gray_700}` : `${colors.border_gray_200}`} sticky top-0 shadow-sm`}>
            <div className="flex items-center gap-3">
                <div className="h-12 w-12">
                    <ImageViewer imageURL={profilePhoto}>
                        <img className="h-12 w-12 rounded-full" src={profilePhoto} alt={`${firstName} ${lastName}`} />
                    </ImageViewer>
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5 capitalize">
                    <p className={`flex items-center gap-1 ${isDarkMode ? colors.text_gray_200 : colors.text_gray_700} font-bold`}>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </p>
                    <p className="flex justify-start items-center gap-1 text-xs text-green-500 font-bold tracking-wide">
                        <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span>online</span>
                    </p>
                </div>
            </div>
            <div className="p-2">
                <button
                    className={`p-1 rounded-md transform translate-x-2 focus:outline-none ${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_gray_50}` : `${colors.bg_gray_100} ${colors.text_gray_700}`}`}
                >
                    <HiEllipsisVertical className={`text-xl`} />
                </button>
            </div>
        </div>
    )
}

export default ChatBoxHeader