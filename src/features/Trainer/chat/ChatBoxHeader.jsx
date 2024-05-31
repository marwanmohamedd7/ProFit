import styles from "../../../styles/styles";
import { HiEllipsisVertical } from "react-icons/hi2"
import { useDarkMode } from "../../../context/DarkModeProvider";
import ImageViewer from "../../../ui/ImageViewer";

function ChatBoxHeader() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();

    return (
        <div className={`flex justify-between items-center gap-2 p-2 cursor-pointer border-b ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200} shadow-sm`}>
            <div className="flex items-center gap-3">
                <div className="h-12 w-12">
                    <ImageViewer imageURL={"/uifaces-popular-image.jpg"}>
                        <img className="h-12 w-12 rounded-full" src={"/uifaces-popular-image.jpg"} alt={"firstName"} />
                    </ImageViewer>
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5 capitalize">
                    <p className={`flex items-center gap-1 ${isDarkMode ? colors.text_gray_200 : colors.text_blue_700} font-bold`}>
                        <span>{"marwan"}</span>
                        <span>{"mohamed"}</span>
                    </p>
                    <p className="flex justify-start items-center gap-1 text-xs text-green-500 font-bold tracking-wide">
                        <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span>online</span>
                    </p>
                </div>
            </div>
            <div className="p-2">
                <button
                    className={`p-1 rounded-md transform translate-x-2 focus:outline-none ${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_white}` : `${colors.bg_gray_100} ${colors.text_gray_700}`} text-gray-700`}
                >
                    <HiEllipsisVertical className={`text-xl`} />
                </button>
            </div>
        </div>
    )
}

export default ChatBoxHeader
