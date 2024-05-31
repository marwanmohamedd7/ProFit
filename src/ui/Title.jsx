import { useDarkMode } from "../context/DarkModeProvider";
import { usePageLocation } from "../hooks/usePageLocation"
import styles from "../styles/styles";

function Title() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { pathName } = usePageLocation();
    const [section] = pathName;
    return (
        <h1 className={`font-bold capitalize ${isDarkMode ? colors.text_gray_200 : colors.text_gray_700} text-2xl`} >{section === "portfolio" ? `my ${section}` : section}</h1>
    )
}

export default Title
