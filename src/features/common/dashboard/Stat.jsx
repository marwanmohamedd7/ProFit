import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";

function Stat({ icon, title, value, color }) {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  const [searchParams] = useSearchParams();
  const currentFilter = searchParams.get("last") || "all";
  return (
    <div className={`flex flex-col justify-between gap-4 rounded-md p-4 border capitalize shadow-md  ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`}`}>
      <p className="flex items-center justify-between gap-2 md:flex-nowrap flex-wrap whitespace-nowrap">
        <span className={`p-1.5 rounded-md ${color}`}>{icon}</span>
        <span className={`${isDarkMode ? `${colors.text_gray_400}` : `${colors.text_gray_500}`} text-sm`}>{currentFilter === "all" ? currentFilter : `last ${currentFilter} days`}</span>
      </p>
      <p className="flex flex-col justify-center">
        <span className={`${isDarkMode ? `${colors.text_gray_400}` : `${colors.text_gray_500}`}`}>{title}</span>
        <span className={`${isDarkMode ? `${colors.text_gray_50}` : `${colors.text_gray_900}`} font-bold text-2xl`}>{value}</span>
      </p>
    </div>
  );
}

export default Stat;
