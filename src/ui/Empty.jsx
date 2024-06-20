import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function Empty({ resource }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`bg-transparent text-center p-1 rounded-md shadow-sm border ${isDarkMode && colors.border_gray_700} flex flex-col justify-center items-center gap-2`}>
            <div>
                <img src="/SearchAnimation.gif" alt="" />
            </div>
            <p className={`font-bold text-xl ${isDarkMode ? colors.text_white : colors.text_gray_900} my-4`}>No {resource} could be found.</p>
        </div>
    )

}

export default Empty
