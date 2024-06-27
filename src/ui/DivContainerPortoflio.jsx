import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function DivContainerPortoflio({ children }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`p-4 rounded-lg border w-full ${isDarkMode ? `${colors.text_white} ${colors.border_gray_700} ${colors.bg_slate_800}` : `${colors.text_gray_900} ${colors.bg_white}`}`}>
            {children}
        </div>
    )
}

export default DivContainerPortoflio
