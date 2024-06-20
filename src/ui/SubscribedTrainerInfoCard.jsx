import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function SubscribedTrainerInfoCard({ field, value }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`p-4 rounded-lg border grow ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700} ${colors.text_white}` : `${colors.bg_white} ${colors.text_gray_900}`}`}>
            <p className="flex flex-col items-start text-sm gap-2 w-28 px-1 rounded-lg">
                <span className={`font-normal ${isDarkMode ? `${colors.text_gray_400}` : `${colors.text_gray_500}`}`}>{field}</span>
                <span className="font-bold">{value}</span>
            </p>
        </div>
    )
}

export default SubscribedTrainerInfoCard
