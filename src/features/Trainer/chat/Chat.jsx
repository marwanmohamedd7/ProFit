import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";

function Chat({ active = "" }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <button className={`flex justify-between gap-2 p-3 border cursor-pointer rounded-md ${active ? active : `${isDarkMode ? `${colors.bg_slate_900} ${colors.border_gray_700}` : `${colors.bg_white} ${colors.border_gray_200}`}`}`}>
            <div className="flex items-center gap-3 whitespace-nowrap">
                <div className="h-12 w-12">
                    <img className="h-12 w-12 rounded-full" src={"/uifaces-popular-image.jpg"} alt={"firstName"} />
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                    <p className={`flex items-center gap-1 capitalize ${isDarkMode ? colors.text_gray_200 : colors.text_blue_700} text-sm font-bold`}>
                        <span>{"marwan"}</span>
                        <span>{"mohamed"}</span>
                    </p>
                    <p className={`text-xs ${isDarkMode ? colors.text_gray_100 : colors.text_gray_500}`}>{"eh l akbhar"}</p>
                </div>
            </div>
            <p className={`py-2 text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500} whitespace-nowrap`}>12:46 AM</p>
        </button>
    )
}

export default Chat
