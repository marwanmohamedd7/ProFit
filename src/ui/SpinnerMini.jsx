import { BiLoaderAlt } from "react-icons/bi";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function SpinnerMini({ size = "text-lg", dark = true }) {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  return (
    <BiLoaderAlt className={`${size} ${isDarkMode ? colors.text_white : dark && colors.text_gray_700} animate-rotate`} />
  )
}

export default SpinnerMini;
