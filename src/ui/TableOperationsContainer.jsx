import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function TableOperationsContainer({ children }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`py-4 w-full rounded-lg border shadow-sm ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`}`}>
            {children}
        </div>
    )
}

export default TableOperationsContainer
