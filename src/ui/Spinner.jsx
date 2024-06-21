import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function Spinner() {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`w-full h-full flex justify-center items-center py-4 bg-transparent`}>
      <div className={`w-12 h-12 border-t-4 border-b-4 ${!isDarkMode && colors.border_blue_700} opacity-90 border-brand-600 rounded-full animate-spin`}></div>
    </div>
  )
}

export default Spinner;
